import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcUEvpvG09qtrrsxvVDDjHOdv64jUNQIo",
  authDomain: "fir-cb47e.firebaseapp.com",
  projectId: "fir-cb47e",
  storageBucket: "fir-cb47e.appspot.com",
  messagingSenderId: "349288338869",
  appId: "1:349288338869:web:f4d87312e2f0a75671b5fc",
  measurementId: "G-5JR79DY1QZ"
};

export default firebase.initializeApp(firebaseConfig)
