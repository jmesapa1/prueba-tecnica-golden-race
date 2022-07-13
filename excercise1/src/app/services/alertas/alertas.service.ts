import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Alerta } from 'src/app/model/Alertas';
import { firstValueFrom, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {
  private estadoAlerta: Alerta[] = [];
  private alertaSubject = new Subject<Alerta[]>();
  private alertas$?: Observable<Alerta[]>;
  constructor() { }

  //Getter con retorno del observer(subject) 
  get alerts$(): Observable<Alerta[]> {
    if (!this.alertas$) {
      this.alertas$ = this.alertaSubject.asObservable();
    }
    return this.alertas$;
  }

  //Metodo utilizado para la creación de alertas  y definición del tiempo de cierre de la notificación
  generarAlerta(mensaje: string,tipo:string): void {
    const alerta = new Alerta(mensaje,tipo);
    firstValueFrom(timer(5000)).then(() => this.eliminarAlerta(alerta.id));
    this.agregarAlerta(alerta);
  }

  //Metodo utilizado para agregar la notificacion al arreglo de estado de notifiaciones
  //y generamos la notificación del cambio con next()
  private agregarAlerta(alerta: Alerta): void {
    this.estadoAlerta[0] = alerta;
    this.alertaSubject.next(this.estadoAlerta);
  }

  //Metodo utilizado para eliminar la notificacion del arreglo de estado de notifiaciones
  //y generamos la notificación del cambio con next()
  private eliminarAlerta(id: string): void {
    this.estadoAlerta = this.estadoAlerta.filter(alerta => alerta.id !== id);
    this.alertaSubject.next(this.estadoAlerta)
  }
  
  //Metodo utilizado para eliminar la notificacion desde fuera
  //y generamos la notificación del cambio con next()
  cerrarAlerta(id: string): void {
    this.eliminarAlerta(id);
  }

  //Metodo utilizado para eliminar todas las notificaciónes, depende si tendremos varias alertas o solo una
  eliminarTodasAlertas(): void{
    this.estadoAlerta =[]
    this.alertaSubject.next(this.estadoAlerta)
  }
}
