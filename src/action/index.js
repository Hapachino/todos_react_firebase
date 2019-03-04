import types from './types';
import db, { auth } from '../firebase';

export const getTodos = uid => dispatch => {
  const dbRef = db.ref('/todos/' + uid);
  
  dbRef.on('value', snapshot => {
    dispatch({
      type: types.GET_TODOS,
      todos: snapshot.val(),
    })
  })
};

export const authChange = dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      const { uid } = user;

      dispatch({
        type: types.SIGN_IN,
        uid,
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
  } catch (error) {
    dispatch({
      type: types.AUTH_ERROR,
      error,
    });
  }
}

export const signOut = () => () => {
  auth.signOut();
}

export const signUp = ({ email, password }) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch(error) {
    dispatch({
      type: types.AUTH_ERROR,
      error,
    });
  }
}
