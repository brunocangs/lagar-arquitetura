import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// Move to dotenv
const app = firebase.initializeApp({
  apiKey: 'AIzaSyDX1d9lgwfNcv0-ZX3ZaBrVEDIM_iT-z4o',
  authDomain: 'lagar-dev.firebaseapp.com',
  databaseURL: 'https://lagar-dev.firebaseio.com',
  projectId: 'lagar-dev',
  storageBucket: 'lagar-dev.appspot.com',
  messagingSenderId: '366646309813'
});

export default app;