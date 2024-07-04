//https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email, password) => {
  const auth = getAuth();
  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const signInUser = async (email, password) => {
  try {
    const auth = getAuth();
    await setPersistence(auth, browserSessionPersistence);
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(`${errorCode}: ${errorMessage}`);
  }
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;

  // const userCookie = useCookie("userCookie");

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    // if (window !== undefined) {
    // }
    if (user) {
      // localStorage.setItem("firebaseUser", JSON.stringify(user));
      // console.log("User Signed In", user);
    } else {
      // localStorage.removeItem("firebaseUser");
      // console.log("User Signed Out", user);
    }

    firebaseUser.value = user;

    // @ts-ignore
    // userCookie.value = user;
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
  return result;
};

export const resetPassword = async (email) => {
  try {
    const auth = getAuth();
    const credentials = sendPasswordResetEmail(auth, email);
    return credentials;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    throw new Error(`${errorCode}: ${errorMessage}`);
  }
};

// initUser();
