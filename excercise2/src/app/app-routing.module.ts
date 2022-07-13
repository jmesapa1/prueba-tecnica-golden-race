import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './components/lazy-components/lazy/lazy.component';
import { SecureComponent } from './components/secure-components/secure/secure.component';
import { SecureGuard } from './guards/secure/secure.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: 'lazy',
  loadChildren: () => import('./components/lazy-components/components.module').then(x => x.ComponentsModule)
},
{
  path: 'secure',
  canLoad: [SecureGuard],
  canActivate: [SecureGuard],
  loadChildren: () => import('./components/secure-components/components.module').then(x => x.ComponentsModule)
},
{
  path: '',
  component: HomeComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
