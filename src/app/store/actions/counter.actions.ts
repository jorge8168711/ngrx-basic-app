import { Action } from '@ngrx/store';

export const INCREASE = '[COUNTER]: Increase';
export const DECREASE = '[COUNTER]: Decrease';
export const DIVIDE   = '[COUNTER]: Divide';
export const MULTIPLY = '[COUNTER]: Multiply';
export const RESET    = '[COUNTER]: Reset';


export class IncrementAction implements Action {
  readonly type = INCREASE;
}

export class DecreaseAction implements Action {
  readonly type = DECREASE;
}

export class DivideAction implements Action {
  readonly type = DIVIDE;
  constructor(public payload: number) {}
}

export class MultiplyAction implements Action {
  readonly type = MULTIPLY;
  constructor(public payload: number) {}
}

export class ResetAction implements Action {
  readonly type = RESET;
}

export type counterActions =
  IncrementAction |
  DecreaseAction |
  DivideAction |
  MultiplyAction |
  ResetAction;
