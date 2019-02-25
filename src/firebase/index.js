import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '../config/firebase';

firebase.initializeApp(firebaseConfig);

export default firebase.database();