import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Policy } from "../../../policy.model";
import { User } from '../../../user-services';
import { AuthService } from '../../../policy.service';

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.css"]
})
export class RegisterPageComponent {
  @Input() button: boolean = true;
  policies: Policy[];
  profileForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required)
  });
  constructor(private fb: FormBuilder, public authService: AuthService) {}

  
}
