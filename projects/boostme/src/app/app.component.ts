import { Component } from '@angular/core';
import { AuthService } from './policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boostme';
  validator = false;
  constructor(public authService: AuthService){}
}
