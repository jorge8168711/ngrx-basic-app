import * as fromCounterActions from '../actions';

export function counterReducer(state: number = 0, action: fromCounterActions.counterActions) {
  switch (action.type) {
    case fromCounterActions.INCREASE:
      return state + 1;

    case fromCounterActions.DECREASE:
      return state === 0 ? 0 : state - 1;

    case fromCounterActions.DIVIDE:
      return state / action.payload;

    case fromCounterActions.MULTIPLY:
      return state * action.payload;

    case fromCounterActions.RESET:
      return state = 0;

    default:
      return state;
  }
}
