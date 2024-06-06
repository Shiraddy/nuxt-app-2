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
          <div class="card shadow-two hover myCard">
            <img class="service-image" src="/images/student1.png" alt="" />
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
          <div class="card shadow-two hover myCard">
            <img
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
          <div class="card shadow-two hover myCard">
            <img class="service-image" src="/images/skill1.png" alt="images" />
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
        <div class="banner-half">
          <div class="text-white text-center">
            <!-- <img src="/images/mobile.png" alt="" /> -->
            <div class="">
              <h3 class="title fw-bolder mt-lg-5">REQUEST A TUTOR NOW</h3>
              <p class="paragraph pt-0 mt-0">
                Experience the best form of home tuition.
              </p>
              <RouterLink
                class="btn shadow-two px-lg-4 search-button me-3 my-2"
                to="/form"
                >Request Now<i class="fa-solid fa-magnifying-glass me-2"></i
              ></RouterLink>
            </div>
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
  padding-top: 10rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.paragraph,
.reqBtn {
  margin: 0 2rem 0;
}
</style>
