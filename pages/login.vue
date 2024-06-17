<template>
  <section>
    <div class="text-white bg-danger banner">
      <NavBar></NavBar>

      <section class="container-sm">
        <div id="offer" class="row py-lg-3 form-sign-in">
          <div class="col-lg-8 text-start d-none d-lg-block"></div>
          <div class="col-lg-4 col-md-6 col-sm-12 py-4 shadow-two login">
            <div class="py-2">
              <h3 class="fw-bolder fs-beauty">WELCOME BACK</h3>
              <p>Login With Your Credentials</p>
            </div>
            <form @submit.prevent="signInUser">
              <input
                required
                type="text"
                class="apply-input mb-4 res-shadow"
                name="email"
                @keydown="loginErrorDisplay"
                placeholder="Enter your email"
                v-model.trim="email"
              />

              <br />

              <input
                required
                class="apply-input res-shadow"
                type="password"
                name="password"
                placeholder="Password"
                @keydown="loginErrorDisplay"
                v-model.trim="password"
              />
              <br />

              <!-- Login Error Message -->
              <p v-if="loginError" class="my-2 mx-5 mx-lg-0">
                {{ errorMessage }}
              </p>

              <!-- SUBMIT BUTTON -->
              <button type="submit" class="btn btn-danger apply-input mt-3">
                Sign In
                <span id="loading-spinner" v-if="wheel">
                  <div
                    class="spinner-border spinner-border-sm text-white"
                    role="status"
                  ></div>
                </span>
              </button>
              <br />

              <div class="row text-white">
                <small class="col">
                  <a class="link" href="#">Forgot Password</a>
                </small>
                <small class="col">
                  <RouterLink class="link" to="/apply">Sign-Up</RouterLink>
                </small>
              </div>
            </form>
          </div>
        </div>
        <!-- NAVBAR -->
        <div class="d-flex justify-content-end d-none d-lg-flex">
          <p class="me-5 pe-3">Lifeline Educational Solutions Limited&copy;</p>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
// import { initializeApp } from "firebase/app";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
//   authDomain: "lifeline-edu-site.firebaseapp.com",
//   projectId: "lifeline-edu-site",
//   storageBucket: "lifeline-edu-site.appspot.com",
//   messagingSenderId: "1059969595497",
//   appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
// };

// const firebase = initializeApp(firebaseConfig);
// const auth = getAuth(firebase);

export default {
  name: "Login",
  data() {
    return {
      wheel: false,
      loginError: true,
      errorMessage: "",
      email: "",
      password: "",
    };
  },

  methods: {
    async signInUser() {
      try {
        this.wheel = true;
        const router = useRouter();
        const email = this.email;
        const password = this.password;
        const credentials = await signInUser(email, password);
        // console.log("Login Successful", credentials);
        router.push("/personal");
      } catch (error) {
        this.loginError = true;
        this.wheel = false;
        console.error("Sign-in error:", error.message);

        switch (error.code) {
          case "auth/invalid-email":
            this.errorMessage = "Invalid email";
            break;
          case "auth/user-not-found":
            this.errorMessage = "Email not registered";
            break;
          case "auth/wrong-password":
            this.errorMessage = "Wrong password";
            break;
          case "auth/network-request-failed":
            this.errorMessage = "No internet connection";
            break;
          case "auth/too-many-requests":
            this.errorMessage =
              "Too many failed attempts, please try again later";
            break;
          case "auth/email-already-in-use":
            this.errorMessage = "Email is already in use";
            break;
          default:
            this.errorMessage = "Network Unavailable, try again";
            break;
        }
      }
    },

    loginErrorDisplay() {
      this.loginError = false;
    },
  },
};
</script>

<style scoped></style>
