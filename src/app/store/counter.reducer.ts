import { createReducer } from "@ngrx/store";

const initialState = 0;

// export const counterReducer = createReducer(
//     initialState
// );

//alternative way to create reducer
export function counterReducer(state = initialState){
    return initialState;
}