import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AuthService } from "./policy.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { DashboardComponent } from "./user/dashboard/dashboard.component";
import { LoginComponent } from "./user/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    VerifyEmailComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
