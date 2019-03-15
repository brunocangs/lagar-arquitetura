import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
// Move to dotenv
console.log(process.env.REACT_APP_ENV);
const app = firebase.initializeApp(process.env.REACT_APP_ENV === 'development' ? {
  apiKey: 'AIzaSyDX1d9lgwfNcv0-ZX3ZaBrVEDIM_iT-z4o',
  authDomain: 'lagar-dev.firebaseapp.com',
  databaseURL: 'https://lagar-dev.firebaseio.com',
  projectId: 'lagar-dev',
  storageBucket: 'lagar-dev.appspot.com',
  messagingSenderId: '366646309813'
}: {});

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);


export default app;