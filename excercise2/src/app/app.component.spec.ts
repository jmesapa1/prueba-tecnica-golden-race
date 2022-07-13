
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { MainComponent } from './pages/main/main.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        FormsModule, 
        
        ReactiveFormsModule,
    
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent, 
        MainComponent,
        AlertasComponent
      ],
    }).compileComponents();
  });

});
