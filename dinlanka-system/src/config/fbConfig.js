import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBa47z0EvawUCIQ6uffbrUn4QuotTulP0g",
  authDomain: "dinlanka-490cd.firebaseapp.com",
  databaseURL: "https://dinlanka-490cd.firebaseio.com",
  projectId: "dinlanka-490cd",
  storageBucket: "dinlanka-490cd.appspot.com",
  messagingSenderId: "11393342966"
};

firebase.initializeApp(config);

export default firebase