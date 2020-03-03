import { Component } from "@angular/core";
import { EventEmitter } from "events";
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../policy.service';
import { User } from '../../user-services';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  private display = "none";
  private dashboards = [];
  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit() {}

  createDashboard(e: EventEmitter) {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

  addDashboard() {
    if (this.createDashboard ? true : false) {
      this.dashboards.unshift(this.createDashboard);
    }
  }
}
