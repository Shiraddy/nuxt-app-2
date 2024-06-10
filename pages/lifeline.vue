<template>
  <section id="">
    <div class="text-white bg-danger banner">
      <NavBar></NavBar>
      <section class="container-sm">
        <div id="offer" class="row py-lg-3 form-sign-in">
          <div class="col-lg-8 text-start d-none d-lg-block"></div>
          <div class="col-lg-4 col-md-6 col-sm-12 py-4 shadow-two login">
            <div class="py-2">
              <h3 class="fw-bolder">LIFELINE ADMIN</h3>
              <p>Welcome Back Admin</p>
            </div>
            <form @submit.prevent="login">
              <input
                required
                type="text"
                class="apply-input mb-4"
                placeholder="Enter your email"
                v-model.trim="adminLogin.email"
              />

              <input
                required
                class="apply-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                v-model.trim="adminLogin.password"
              />

              <p class="text-danger my-0 py-0 fw-bolder" v-if="loginError">
                {{ errorMessage }}
              </p>
              <!-- SUBMIT BUTTON -->
              <button class="btn btn-danger apply-input mt-3" type="submit">
                Sign In
                <span id="loading-spinner" v-if="wheel">
                  <div
                    class="spinner-border spinner-border-sm text-white"
                    role="status"
                  ></div>
                </span>
              </button>
              <br />

              <div class="row">
                <p class="col">
                  <a class="nav-link" href="#">Forgot Password</a>
                </p>
                <p class="col">
                  <a class="nav-link" href="/apply">Sign-Up</a>
                </p>
              </div>

              <div>
                <div class="py-lg-1">
                  <p>
                    Or login using:
                    <i class="fa fa-google-plus-circle"></i>
                    <i class="fa fa-facebook-official"></i>
                    <i class="fa fa-twitter"></i>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: "Lifeline Login Page",

  data() {
    return {
      errorMessage: "",
      loginError: false,
      wheel: false,
      adminLogin: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    async login() {
      const router = useRouter();
      this.wheel = true;
      const email = this.adminLogin.email;
      const password = this.adminLogin.password;

      try {
        const credentials = await signInUser(email, password);
        if (email === "shirazadnan53@gmail.com") {
          router.push("/admin");
          console.log("Login Successful");
        } else {
          this.wheel = false;
          alert("You are not the Admin");
          router.push("/lifeline");
        }
      } catch {
        (error) => {
          this.loginError = true;
          this.wheel = false;
          console.error("Sign-in error:", error.code);
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

            default:
              this.errorMessage = "Incorrect Email or Password";
              break;
          }
        };
      }
    },
  },
};
</script>

<style scoped>
.fa {
  font-size: 1.3rem;
  margin: 0 0.7rem;
}
</style>
