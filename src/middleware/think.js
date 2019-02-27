export default ({ dispatch }) => next => action => {
  typeof action !== 'function' ? next(action) : action(dispatch);
}

