import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAzXESaqwA5mGZdgtqWvEsaEPAWH4LuiU",
  authDomain: "mieventos-react.firebaseapp.com",
  databaseURL: "https://mieventos-react.firebaseio.com",
  projectId: "mieventos-react",
  storageBucket: "mieventos-react.appspot.com",
  messagingSenderId: "1028502286403",
  appId: "1:1028502286403:web:2d4fc404c38c7c0d4fe4f6"
};
firebase.initializeApp(firebaseConfig);

export const firebaseStorage = firebase.storage();