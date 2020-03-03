import { Component, OnInit } from "@angular/core";
import { NgStyle } from "@angular/common";
import { EventEmitter } from "events";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private display = "none";
  private dashboards = [];
  constructor() {}

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
