import { Action } from '@ngrx/store';
import { INCREASE, DECREASE } from '../actions';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state === 0 ? 0 : state - 1;

    default:
      return state;
  }
}
