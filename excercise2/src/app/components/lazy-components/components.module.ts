import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule } from '@angular/router';
import { LazyComponentRoutes } from './components-routing.module';



@NgModule({
  declarations: [
    LazyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LazyComponentRoutes),

  ]
})
export class ComponentsModule { }
