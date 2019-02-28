import types from './types';
import db, { auth } from '../firebase';

export const getTodos = uid => dispatch => {
  const dbRef = db.ref('/todos/' + uid);
  console.log(uid);
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
      const { uid } = user;
    
      localStorage.setItem('uid', uid);

      dispatch({
        type: types.SIGN_IN,
        uid,
      });
    } else {
      localStorage.removeItem('uid');

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

export const signOut = () => () => {
  auth.signOut();
}
