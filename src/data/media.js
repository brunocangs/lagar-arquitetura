import firebase from '../firebase';

const db = firebase.firestore();

export default db.collection('media');