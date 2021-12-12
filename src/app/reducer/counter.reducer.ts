import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state:any) => state + 1),
    on(decrement, (state:any) => state - 1),
    on(reset, (state:any) => 0)
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}