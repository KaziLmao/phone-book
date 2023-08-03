import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './services/guard.service';
import { HomePage } from './home/home.page';
import { AuthenticationPage } from './authentication/authentication.page';
import { RegistrationPage } from './registration/registration.page';

const routes: Routes = [
  {
    path: 'home', component: HomePage, canActivate: [GuardService],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contact/:id', 
    loadChildren: () => import('./view-contact/view-contact.module').then( m => m.ViewContactPageModule)
  },
  {
    path: 'authentication', component: AuthenticationPage,
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
  {
    path: 'registration', component: RegistrationPage,
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
