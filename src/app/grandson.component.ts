import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grandson',
  template: /*html*/ `
    <h3>Contador</h3>
    <p>{{ counter }}</p>

    <button type="button" (click)="reset()">Reset</button>
  `,
  styles: [
    /*css*/ `
    p {
      font-size: 18 px;
    }
  `]
})
export class GrandsonComponent {
  @Input() counter: number;
  @Output() counterReset = new EventEmitter<number>();

  constructor() {}

  public reset() {
    this.counter = 0;
    this.counterReset.emit(this.counter);
  }
}
