import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getStorage, ref, uploadBytes } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
    authDomain: "lifeline-edu-site.firebaseapp.com",
    projectId: "lifeline-edu-site",
    storageBucket: "lifeline-edu-site.appspot.com",
    messagingSenderId: "1059969595497",
    appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  // console.log(app);
  // initUser();
});

