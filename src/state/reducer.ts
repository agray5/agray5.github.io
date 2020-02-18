import { createReducer } from 'reduxsauce';
import { update, set } from 'timm';
import Actions from './actions';

const Types = Actions.Types;

const INITIAL_STATE = {
  user: null,
  loading: false,
  fetching: 0
}

export const failure = (state = INITIAL_STATE, action: any) => set(state, "error", action.msg)

export const setValue = (state = INITIAL_STATE, action: any) => set(state, action.key, action.value)

export const decrement = (state = INITIAL_STATE, action: any) => (
  update(state, action.key, (val: number) => val - (action.amount || 1))
)

export const increment = (state = INITIAL_STATE, action: any) => (
  update(state, action.key || '', (val: number) => val + (action.amount || 1))
)

export const startLoading = (state = INITIAL_STATE, action: any) => {
  state = increment(state, {key: 'fetching'});
  if(!state.loading) state = set(state, "loading", true);
  return state;
}

export const finishLoading = (state = INITIAL_STATE, action: any) => {
  state = decrement(state, {key: 'fetching'});
  if(state.loading && state.fetching < 1) state = set(state, "loading", false);
  return state;
}



export const HANDLERS = {
  [Types.SET_ERROR]: failure,
  [Types.SET]: setValue,
  [Types.DECREMENT]: decrement,
  [Types.INCREMENT]: increment,
  [Types.START_LOADING]: startLoading,
  [Types.FINISH_LOADING]: finishLoading
}

export default createReducer(INITIAL_STATE, HANDLERS)