import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent implements OnInit {
display='none';
  constructor() { }

  ngOnInit() {
  }

createDashboard(){
this.display='block';

}

onCloseHandled(){

  this.display='none';

}

}
