import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  { path: 'register',  loadChildren:  () => import('./user/user.module').then(module => module.UserModule)},
  { path: '',   redirectTo: '/register', pathMatch: 'full' },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
