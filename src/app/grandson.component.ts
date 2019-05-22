import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import { ResetAction } from './store/actions';

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
export class GrandsonComponent implements OnInit, OnDestroy {
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

  public reset() {
    this.store.dispatch(new ResetAction());
  }
}
