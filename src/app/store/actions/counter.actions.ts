import { Action } from '@ngrx/store';

export const INCREASE = '[COUNTER]: Increase';
export const DECREASE = '[COUNTER]: Decrease';


export class IncrementAction implements Action {
  readonly type = INCREASE;
}

export class DecreaseAction implements Action {
  readonly type = DECREASE;
}
