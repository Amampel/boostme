import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
