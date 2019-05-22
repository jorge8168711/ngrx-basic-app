import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementAction, DecreaseAction } from './store/actions';
import { AppState } from './store/app.reducers';

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

      <!-- <app-child [counter]="counter" (counterHasChange)="counter = $event"></app-child> -->
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
export class AppComponent {
  public counter;

  constructor(private store: Store<AppState>) {
    // esto me suscribe al store completo con todos los estadps
    // this.store.subscribe( state => {})

    // esto me suscribe a una parte del store, en este caso a COUNT
    // this.store.select('count').subscribe( state => {})

    this.store.select('count').subscribe( state => this.counter = state);
  }

  public increase() {
    this.store.dispatch( new IncrementAction() );
  }

  public decrease() {
    this.store.dispatch( new DecreaseAction() );
  }
}
