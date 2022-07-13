import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas/alertas.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  {
  formulario: FormGroup = this.fb.group({
    nombre_producto: [
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(5)],
    ],
    valor_producto: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private alertasService: AlertasService) {}

  

  guardar() {
    if (this.formulario.valid) {
      this.onShowAlertClick('Se guardara el registro exitosamente', 'success');
      this.formulario.reset();
    } else {
      this.onShowAlertClick('El formulario es invalido', 'error');
      this.formulario.markAsTouched();
    }
  }

  onShowAlertClick(mensaje: string, tipo: string): void {
    this.alertasService.generarAlerta(mensaje, tipo);
  }

  limpiarFormulario() {
    this.formulario.reset();
    this.alertasService.eliminarTodasAlertas();
  }
}
