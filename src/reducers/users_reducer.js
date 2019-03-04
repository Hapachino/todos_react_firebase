import types from '../action/types';

const DEFAULT_STATE = {
  auth: false,
  error: '',
  uid: null,
  firstName: '',
  lastName: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.AUTH_ERROR:
      return { ...DEFAULT_STATE, error: action.error };
    case types.CLEAR_AUTH_ERROR:
      return { ...state, error: '' };
    case types.SIGN_IN:
      const { uid, firstName, lastName } = action;
      return { auth: true, error: '', uid, firstName, lastName };
    case types.SIGN_OUT:
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
}