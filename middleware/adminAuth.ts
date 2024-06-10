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

// ---cut---
export default defineNuxtRouteMiddleware((to, from) => {
  const user = auth.currentUser;
  const firebaseUser = useFirebaseUser();
  // firebaseUser.value = auth.currentUser;
  const userCookie = useCookie("userCookie");
  const router = useRouter();

  if (!user || user.email !== "shirazadnan53@gmail.com") {
    return navigateTo("/lifeline");
  }
});
