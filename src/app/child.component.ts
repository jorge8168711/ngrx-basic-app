import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import * as fromCounterActions from './store/actions';

@Component({
  selector: 'app-child',
  template: /*html*/ `
    <h3>Contador</h3>
    <p>{{ counter }}</p>

    <button type="button" (click)="divide()">Dividir</button>
    <button type="button" (click)="multiply()">Multiplicar</button>

    <app-grandson></app-grandson>
  `,
  styles: [
    /*css*/ `
    p {
      font-size: 18 px;
    }
  `]
})
export class ChildComponent implements OnInit, OnDestroy {
  public counter;
  private subs = new SubSink();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subs.add(
      this.store.select('count').subscribe( state => this.counter = state)
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public multiply() {
    this.store.dispatch(new fromCounterActions.MultiplyAction(2));
  }

  public divide() {
    this.store.dispatch(new fromCounterActions.DivideAction(2));
  }
}
