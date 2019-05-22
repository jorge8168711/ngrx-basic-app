import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: /*html*/ `
    <h3>Contador</h3>
    <p>{{ counter }}</p>

    <button type="button" (click)="divide()">Dividir</button>
    <button type="button" (click)="multiply()">Multiplicar</button>

    <app-grandson [counter]="counter" (counterReset)="resetCounter($event)"></app-grandson>
  `,
  styles: [
    /*css*/ `
    p {
      font-size: 18 px;
    }
  `]
})
export class ChildComponent {
  @Input() counter: number;
  @Output() counterHasChange = new EventEmitter<number>();

  constructor() {}

  public multiply() {
    this.counter *= 2;
    this.counterHasChange.emit(this.counter);
  }

  public divide() {
    this.counter /= 2;
    this.counterHasChange.emit(this.counter);
  }

  public resetCounter(e: number) {
    this.counter = e;
    this.counterHasChange.emit(this.counter);
  }
}
