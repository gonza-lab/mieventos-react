import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from '../apikey';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db, firebase };
