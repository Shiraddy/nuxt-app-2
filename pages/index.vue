<script setup></script>

<template>
  <!-- HERO PAGE AND NAV-BAR -->
  <Carousel></Carousel>
  <!-- <Hero></Hero> -->

  <!-----------SERVICES SECTION------------->
  <section>
    <div class="container-sm py-2 services">
      <h2 class="py-3 choose-title">OUR SERVICES</h2>
      <hr />
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card shadow-three hover myCard">
            <nuxt-img class="service-image" src="/images/student1.png" alt="" />
            <RouterLink class="btn btn-danger btn-service" to="/tuition"
              >Private Tuition</RouterLink
            >
            <p class="service-text text-dark-emphasis my-2 px-lg-2 px-4">
              We offer your child the best tuition experience using varied
              methods and approaches.
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card shadow-three hover myCard">
            <nuxt-img
              class="service-image"
              src="/images/counsel1.png"
              alt="images/skill"
            />
            <RouterLink class="btn btn-danger btn-service" to="/counselling"
              >Counseling</RouterLink
            >

            <p class="service-text text-dark-emphasis my-2 px-lg-2 px-4">
              Our guidance and counseling empowers you to make the right
              decisions about your ward.
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card shadow-three hover myCard">
            <nuxt-img
              class="service-image"
              src="/images/skill1.png"
              alt="images"
            />
            <RouterLink class="btn btn-danger btn-service" to="/consultancy"
              >Consultancy</RouterLink
            >
            <p class="service-text text-dark-emphasis my-2 px-lg-2 px-4">
              We proffer solutions to the many educational challenges schools
              face through training and expertise.
            </p>
          </div>
        </div>
      </div>
      <hr />

      <!-- ABOUT SECTION -->
      <About></About>
      <hr />

      <!-- FORM -->
      <section>
        <div class="shadow-one mx-lg-3 testimony">
          <div class="text-center animate__animated animate__fadeInRight">
            <h3 class="title fw-bolder mt-lg-5 text-muted">
              REQUEST A TUTOR NOW
            </h3>
            <!-- <Divider align="center" type="dotted">
              <b>Center</b>
            </Divider> -->
            <p class="paragraph py-0 my-0 lead">
              Your child deserves top-tier tutoring and a superior educational
              experience. Lifeline is dedicated to providing just that. We
              prioritize results, customer satisfaction, and problem-solving. We
              are your Lifeline, let's get started..
            </p>
            <RouterLink
              class="btn shadow-two px-lg-4 btn-danger me-3 my-2"
              to="/form"
              >Request Now<i class="fa-solid fa-magnifying-glass me-2"></i
            ></RouterLink>
          </div>
          <div class="text-center"></div>
        </div>
      </section>

      <!----------CHOOSE US SECTION------------>
      <div class="mx-lg-4 my-5">
        <ChooseUs></ChooseUs>
      </div>

      <hr />

      <ScrollTop />

      <!----------TESTIMONIAL SECTION------------>
      <Testimonial></Testimonial>
      <hr />

      <!--TUTORS SECTION-->
      <TutorList></TutorList>

      <!-- EMAIL US  -->
      <TheMessage></TheMessage>
    </div>

    <!-- CONTACT-SECTION -->
    <ContactUs></ContactUs>

    <!-- FOOTER SECTION -->
    <Footer></Footer>
  </section>
</template>

<script>
import "animate.css";
export default {
  data() {
    return {
      requestForm: false,
    };
  },

  methods: {
    formToggle() {
      this.requestForm = !this.requestForm;
    },
  },
};
</script>

<style scoped>
.title {
  /* padding-top: 20vh; */
  /* font-size: 2.3vh; */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.paragraph {
  /* font-size: 1vh; */
  padding: 5% 7%;
}

.testimony {
  padding: 7% 3%;
}

.reqBtn {
  margin: 0 2rem 0;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .paragraph {
    font-size: 1.7vh;
    /* padding: 5% 7%; */
  }

  .title {
    font-size: 1.7vh;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Landscape */
@media only screen and (orientation: landscape) {
}
</style>
