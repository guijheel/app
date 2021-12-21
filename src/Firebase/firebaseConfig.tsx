
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyBNV3gcA_RvkPMoMkFs0kkY3k1jJukfALw",
    authDomain: "ifcm-1a069.firebaseapp.com",
    databaseURL: "https://ifcm-1a069-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ifcm-1a069",
    storageBucket: "ifcm-1a069.appspot.com",
    messagingSenderId: "267119589485",
    appId: "1:267119589485:web:f20cef3450d77795362764",
    measurementId: "G-MGE6JFWSQZ"
  };
  
 const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebaseApp.firestore();

export default db;