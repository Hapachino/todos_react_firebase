import types from './types';
import db from '../firebase';

export const getTodos = () => dispatch => {
  const userId = 1;
  const dbRef = db.ref('/todos/' + userId);

  dbRef.on('value', snapshot => {
    dispatch({
      type: types.GET_TODOS,
      todos: snapshot.val(),
    })
  })

  return dbRef;
};
