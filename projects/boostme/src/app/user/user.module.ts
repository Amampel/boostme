import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProfilePageComponent } from './container/profile-page/profile-page.component';
import { CardComponent } from 'projects/core/src/lib/card/card.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from 'projects/core/src/lib/core.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [UserMainComponent, ProfilePageComponent, CoreComponent,
    CardComponent,
    RegisterPageComponent,
    ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
