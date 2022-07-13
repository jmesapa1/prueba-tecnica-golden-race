import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Alerta } from 'src/app/model/Alertas';
import { AlertasService } from 'src/app/services/alertas/alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class AlertasComponent  {

  alertas$: Observable<Alerta[]>;
  
  constructor(private alertasService: AlertasService) {
    this.alertas$ = this.alertasService.alerts$;
  }
  

  cerrarAlerta(id: string): void {
    this.alertasService.cerrarAlerta(id);
  }

}
