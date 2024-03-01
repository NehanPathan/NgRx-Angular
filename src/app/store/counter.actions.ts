import { createAction, props, Action } from '@ngrx/store';

export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);

// export const INCREMENT = '[Counter] Increment';

//alternative way to create action

// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction;

export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);
