import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


const routes: Routes = [
  { path: 'users',  loadChildren:  () => import('./user/user.module').then(module => module.UserModule)},
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
