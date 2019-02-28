import types from './types';
import db, { auth } from '../firebase';

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

export const authChange = dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const { uid, displayName: username } = user;
      dispatch({
        type: types.SIGN_IN,
        uid,
        username
      });
    } else {
      dispatch({
        type: types.SIGN_OUT
      });
    }
  });
}

export const signIn = ({ email, password }) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {

    dispatch({
      type: types.AUTH_ERROR,
      error: err,
    });
  }
}
