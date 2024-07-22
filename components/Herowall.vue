<template>
  <section>
    <div
      id="hero"
      class="carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3500"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div id="banner" class="banner">
            <NavBar></NavBar>
            <!-- HERO PAGE TEXT -->
            <div class="row gx-4 d-flex align-items-center">
              <div class="col-lg-6 col-md-5 col-sm-12"></div>
              <div
                class="col-lg-6 text-white my-5 service-hero-text text-white text-start"
              >
                <h1
                  class="hero-header fs-1 mt-lg-5 mt-5 mb-0 animate__animated animate__zoomIn"
                >
                  DO YOU NEED A <br />
                  <span class="hero-home shadow-one text-info"
                    >HOME TUTOR?</span
                  >
                </h1>
                <p class="hero-text lh-base my-1">
                  We provide your ward a professional home tutor to help your
                  ward become better. <br />
                  <RouterLink
                    class="btn shadow-two px-lg-4 search-button me-3 my-2 animate__animated animate__bounce animate__delay-2s"
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
                <h1
                  class="hero-header mt-lg-5 mt-5 mb-0 animate__animated animate__zoomIn"
                >
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
                <h1
                  class="hero-header mt-lg-5 mt-5 mb-0 animate__animated animate__zoomIn"
                >
                  GROW YOUR
                  <span class="text-success shadow-two">SCHOOL...</span>
                </h1>
                <p class="hero-text fs-5 mt-0">
                  Consult with us and let us help your school reach its
                  potential. We are the professionals...
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


        <!-- <div class="carousel-controls">
          <i
            type="button"
            data-bs-target="#hero"
            data-bs-slide="prev"
            class="bi-caret-left-square text-danger fs-1 me-3"
          ></i>
  
          <i
            type="button"
            data-bs-target="#hero"
            data-bs-slide="next"
            class="bi-caret-right-square text-danger fs-1"
          ></i>
        </div> -->
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
.carousel-inner.banner {
  position: relative;
  height: 500px; /* Adjust the height as needed */
}

.carousel-item {
  height: 100%;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%; /* Adjust the width as needed */
  max-width: 800px; /* Set a maximum width for the card */
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Adjust the background color and opacity */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.parent-quote {
  font-size: 20px;
  line-height: 1.5;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .parent-quote {
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
