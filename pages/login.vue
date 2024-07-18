<template>
  <section>
    <div class="text-white bg-danger banner">
      <NavBar></NavBar>

      <section class="container-fluid">
        <div class="row">
          <div class="col-lg-6 d-none d-lg-block"></div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="d-flex justify-content-center align-items-center">
              <div class="shadow-two login px-3 form-sign-in">
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
                      <a class="link" href="#" @click="resetPassword"
                        >Forgot Password</a
                      >
                    </small>
                    <small class="col">
                      <RouterLink class="link" to="/apply">Sign-Up</RouterLink>
                    </small>
                  </div>
                </form>
                <div class="mt-4">
                  <Divider type="solid">
                    <small>Home of Solutions&copy;</small>
                  </Divider>
                  <!-- <p class=""></p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
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
    async resetPassword() {
      try {
        const email = this.email;
        const credentials = await resetPassword(email);
        alert("Password Reset email sent to your email");
      } catch (error) {
        alert("ERROR, Enter a Valid Email and try again");
      }
    },

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

<style scoped>
.form-sign-in {
  width: 400px;
  padding: 2.5rem 1rem;
  background-color: aliceblue;
  color: black;
}

@media only screen and (max-width: 620px) {
  .banner {
    height: 100dvh;
  }

  .form-sign-in {
    width: 95vw;
    background-color: aliceblue;
    color: black;
    margin: 40% 10px;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
