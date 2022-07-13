import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,

        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de existir el MainComponent', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance
    expect(app).toBeTruthy(); //TODO: ✔
  });

  //TODO:Aislado! 
  it('Debe retornar control -Nombre- invalido', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------
    app.formulario.controls.nombre_producto.setValue('3223')

    expect(app.formulario.controls.nombre_producto.invalid).toBeTrue(); //TODO: ✔
  });

  it('Debe retornar control -Valor- valido', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------
    app.formulario.controls.valor_producto.setValue(18)

    expect(app.formulario.controls.valor_producto.valid).toBeTrue(); //TODO: ✔
  });
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------
    app.formulario.controls.valor_producto.setValue(5)
    app.formulario.controls.nombre_producto.setValue('Producto de prueba')

    expect(app.formulario.valid).toBeTrue(); //TODO: ✔
  });

  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.componentInstance
    fixture.detectChanges() //TODO: <---------------
    app.formulario.controls.valor_producto.setValue(5)
    app.formulario.controls.nombre_producto.setValue('Pr')

    expect(app.formulario.invalid).toBeTrue(); //TODO: ✔
  });
});
