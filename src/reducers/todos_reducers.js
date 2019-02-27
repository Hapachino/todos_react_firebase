import types from '../action/types';

const DEFAULT_STATE = {
  todos: {},
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case types.GET_TODOS:
      return { ...state, todos: action.todos };
    default:
      return state;
  }
}
