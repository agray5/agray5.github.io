// operations.js
import Actions from './actions';
import { Dispatch } from 'redux';
import Firebase from '../services/Firebase';

const { Creators } = Actions;
const { setUser, startLoading, finishLoading, setError } = Creators;

const login = () => {
  return (dispatch: Dispatch) => {

    dispatch(startLoading());
    return Firebase.loginWithPopup()
      .then(result => {
        dispatch(setUser(result.user));
      })
      .catch(error => {
        dispatch(setError(error.message))
      })
      .finally(() => {
        dispatch(finishLoading())
      })
  }
}

export default {
  login
}