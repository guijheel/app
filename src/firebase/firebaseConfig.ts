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

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user?.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user?.uid,
        name: user?.displayName,
        authProvider: "google",
        email: user?.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const signInWithEmailAndPassword = async (email:any, password:any) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const registerWithEmailAndPassword = async (name:any, email:any, password:any) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user?.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const sendPasswordResetEmail = async (email:any) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};