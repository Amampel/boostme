import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
  <button [disabled]="disabled">{{text}}</button>
  `,
  styles: []
})
export class CoreComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit() {
  }

}
