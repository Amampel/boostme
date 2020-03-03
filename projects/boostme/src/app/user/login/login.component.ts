import { Component} from '@angular/core';
import { AuthService } from '../../policy.service';
import { Policy } from '../../policy.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  policies: Policy[];

  constructor(private fb: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
  }

}
