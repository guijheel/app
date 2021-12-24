import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/firestore";


import { COLLECTIONS, LOCAL_STORAGE } from "./firebaseConstants";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
