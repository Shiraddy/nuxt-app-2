<template>
  <section>
    <div
      id="hero-carousel"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3500"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="banner" class="banner">
            <NavBar></NavBar>
            <!-- HERO PAGE TEXT -->
            <div class="row">
              <div class="col-lg-6 col-md-5 col-sm-12"></div>
              <div
                class="col-lg-6 text-white my-5 service-hero-text text-white text-start"
              >
                <h1 class="hero-header fs-1 mt-lg-5 mt-5 mb-0">
                  DO YOU NEED A <br />
                  <span class="hero-home shadow-one text-info"
                    >HOME TUTOR?</span
                  >
                </h1>
                <p class="hero-text lh-base my-1">
                  We provide your ward a professional home tutor to help your
                  ward become better. <br />
                  <RouterLink
                    class="btn shadow-two px-lg-4 search-button me-3 my-2"
                    to="/form"
                    >GET A TUTOR<i class="fa-solid fa-magnifying-glass me-2"></i
                  ></RouterLink>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="counsel-banner">
            <NavBar></NavBar>
            <div class="row">
              <div class="col-lg-6"></div>
              <div
                class="col-lg-6 text-white my-5 service-hero-text text-start"
              >
                <h1 class="hero-header mt-lg-5 mt-5 mb-0">
                  ARE YOU IN NEED OF
                  <span class="text-primary shadow-two"
                    >GUIDANCE?
                    <i
                      class="fa fa-arrow-circle-o-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </h1>
                <p class="hero-text fs-5 mt-0">
                  Speak to a professional counsellor to assist you with your
                  challenge.
                  <br />
                  <RouterLink
                    class="btn btn-primary btn-lg shadow-two my-3"
                    id="bookBtn"
                    to="/counselling"
                    >BOOK A SESSION</RouterLink
                  >
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="consult-banner">
            <NavBar></NavBar>
            <div class="row">
              <div class="col-lg-6"></div>
              <div
                class="col-lg-6 text-white my-5 service-hero-text text-start"
              >
                <h1 class="hero-header mt-lg-5 mt-5 mb-0">
                  WANT YOUR
                  <span class="text-success shadow-two">SCHOOL</span>
                  TO GROW?
                </h1>
                <p class="hero-text fs-5 mt-0">
                  We help schools become effective, efficient and
                  achieve their goals. 
                  <br />
                  <RouterLink
                    class="btn btn-success btn-lg shadow-two my-3"
                    id="bookBtn"
                    to="/consultancy"
                    >LET'S START...</RouterLink
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "Carousel",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
