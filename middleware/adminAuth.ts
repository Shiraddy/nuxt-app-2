import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
  authDomain: "lifeline-edu-site.firebaseapp.com",
  projectId: "lifeline-edu-site",
  storageBucket: "lifeline-edu-site.appspot.com",
  messagingSenderId: "1059969595497",
  appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof window !== "undefined") {
    const firebaseUser = auth.currentUser;
    const storedUser = JSON.parse(localStorage.getItem("lifelineAdmin"));
    const user = storedUser || firebaseUser;
    // console.log("User Auth", user);
    // console.log("Firebase Auth", firebase);
    if (!user || user.email !== "shirazadnan53@gmail.com") {
      return navigateTo("/lifeline");
    }
  }
});
