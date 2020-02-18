import { createActions } from 'reduxsauce';
import { Types } from "./types"

const { Creators, Types }: Types = createActions({
  login: [],
  setError: ['msg'],
  setUser: ['user'],
  set: ['key', 'value'], 
  startLoading: [],
  finishLoading: [],
  decrement: ['key', 'amount'],
  increment: ['key', 'amount']
});


export default { Creators, Types }