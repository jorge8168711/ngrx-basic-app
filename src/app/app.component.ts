import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducers';
import { SubSink } from 'subsink';
import * as fromCounterActions from './store/actions';

@Component({
  selector: 'app-root',
  template: /*html*/ `
    <main class="main">
      <h1 class="title text-center">Contador</h1>
      <h2 class="counter text-center">{{ counter }}</h2>

      <div class="text-center">
        <button (click)="decrease()">-</button>
        <button (click)="increase()">+</button>
      </div>

      <app-child></app-child>
    </main>
  `,
  styles: [
    /*css*/ `
    .main {
      padding: 20px;
    }

    .title {
      color: gray;
    }

    .text-center {
      text-align: center;
    }

    .flex {
      display: flex;
      justify-content: center;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  public counter;
  private subs = new SubSink();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // esto me suscribe al store completo con todos los estadps
    // this.store.subscribe( state => {})

    // esto me suscribe a una parte del store, en este caso a COUNT
    // this.store.select('count').subscribe( state => {})

    this.subs.add(
      this.store.select('count').subscribe( state => this.counter = state)
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public increase(): void {
    this.store.dispatch( new fromCounterActions.IncrementAction() );
  }

  public decrease(): void {
    this.store.dispatch( new fromCounterActions.DecreaseAction() );
  }
}
