<script setup></script>

<template>
  <!-- HERO PAGE AND NAV-BAR -->
  <Herowall></Herowall>
  <!-- <Hero></Hero> -->

  <!-----------SERVICES SECTION------------->
  <section>
    <div class="container-sm py-4 services">
      <h2 class="pt-3 mb-0 choose-title">HOME OF SOLUTIONS</h2>
      <h6 class="fs-beauty text-secondary mt-0">
        We provide the following services
      </h6>
      <hr />
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card shadow-three myCard">
            <nuxt-img class="service-image" src="/images/student1.png" alt="" />
            <RouterLink class="btn btn-danger btn-service" to="/tuition"
              >Home Tuition</RouterLink
            >
            <p class="service-text text-dark-emphasis my-2 px-lg-2 px-4">
              Get a home teacher for your child and help him become his very
              best. Your child deserves the best.
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card shadow-three myCard">
            <nuxt-img
              class="service-image"
              src="/images/counsel1.png"
              alt="images/skill"
            />
            <RouterLink class="btn btn-danger btn-service" to="/counselling"
              >Counseling</RouterLink
            >

            <p class="service-text text-dark-emphasis my-2 px-lg-2 px-4">
              Receive expert assistance to make the right decisions for the
              future. Avoid the pitfalls.
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="card shadow-three myCard">
            <nuxt-img
              class="service-image"
              src="/images/skill1.png"
              alt="images"
            />
            <RouterLink class="btn btn-danger btn-service" to="/consultancy"
              >Consultancy</RouterLink
            >
            <p class="service-text text-dark-emphasis my-2 px-lg-2 px-4">
              Get in touch with the industry experts. Let us move your
              organization the next level.
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
        <div class="shadow-one mx-lg-3 testimony bg-white">
          <div class="text-center animate__animated animate__fadeInRight">
            <!-- <h3 class="title fw-bolder mt-lg-5 text-muted">
              REQUEST A TUTOR NOW
            </h3> -->
            <Divider align="center" type="solid">
              <b class="text-secondary">LET'S GET STARTED</b>
            </Divider>
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
  font-size: 1.3rem;
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
  font-size: 0.99rem;
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
