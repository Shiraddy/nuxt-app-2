<template>
  <section>
    <div class="banner" v-if="bigBanner">
      <NavBar></NavBar>

      <div class="container-lg">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6 text-white my-5 res-hero mt-sm-5 text-lg-start">
            <h2 class="hero-header mt-lg-5 fs-1 mt-5">
              NEED A EXCELLENT <br />
              <span class="text-info">HOME TUTOR?</span>
            </h2>
            <p class="px-lg-5 fs-5 lh-base fs-beauty ms-lg-2">
              We provide you qualified and excellent tutors to help your ward at
              home. Let us give you improved results.
            </p>

            <a
              href="#tutorFormRegister"
              class="btn btn-success btn-lg shadow-two my-lg-2 ms-lg-5"
              @click="display"
            >
              Request A Tutor
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div v-if="smallBanner" class="client-banner"><NavBar></NavBar></div>
  </section>

  <section>
    <!-----------Our Offers------------->
    <div class="container-sm py-2 my-lg-5 services-apply mt-5 my-4">
      <div id="tutorFormRegister">
        <!-- Tutor Request Form -->
        <div v-if="request">
          <h3 class="hero-header fs-2 py-2">TUTOR REQUEST FORM</h3>
          <Form></Form>
        </div>
      </div>
      <div v-if="request === false" class="allTuitionData">
        <h2 class="text-danger fs-1 fw-bolder mt-lg-5 mt-3">Private Tuition</h2>
        <small class="fs-4 text-dark-emphasis">
          We Offer the Following and More...
        </small>
        <hr />

        <section class="py-4 shadow-one my-3">
          <div class="container-sm">
            <!-- <h2 class="text-center mb-4 choose-title">What We Do...</h2> -->
            <!-- Add your services content here -->
            <div class="row">
              <div class="col-md-4 col-lg-4">
                <div class="card myCard">
                  <div class="card-body">
                    <!-- <i class="fa-solid fa-book-open option-icon"></i> -->
                    <img
                      src="/images/student2.png"
                      alt=""
                      class="service-image"
                    />
                    <h5 class="card-title">Test Preparation</h5>
                    <p class="card-text text-dark-emphasis">
                      We prepare students to write examinations.
                    </p>
                    <!-- <i class="fa-solid fa-book-open-reader py-lg-2 icon"></i> -->
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-lg-4">
                <div class="card myCard">
                  <div class="card-body">
                    <!-- <i class="fa-solid fa-lightbulb option-icon"></i> -->
                    <img
                      src="/images/student3.png"
                      alt=""
                      class="service-image"
                    />
                    <h5 class="card-title">Subject Tutoring</h5>
                    <p class="card-text px-2 text-dark-emphasis">
                      We teach students in various academic subjects.
                    </p>
                    <!-- <i class="fa-solid fa-book-open py-lg-2 icon"></i> -->
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-lg-4">
                <div class="card myCard">
                  <div class="card-body">
                    <!-- <i class="fa-solid fa-star option-icon"></i> -->
                    <img
                      src="/images/student1.png"
                      alt=""
                      class="service-image"
                    />
                    <h5 class="card-title">Homework Help</h5>
                    <p class="card-text text-dark-emphasis">
                      We guide students to do their homework.
                    </p>
                    <!-- <i class="fa-solid fa-school py-lg-2 icon"></i> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container-lg py-3 d-block my-5">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 bg-success shadow-two">
              <div
                class="lh-base mt-lg-4 fs-5 py-5 px-lg-3 px-4 text-white text-start fs-beauty"
              >
                <p>
                  Our private tuition services cater to students seeking
                  targeted assistance in various subjects and educational
                  levels. With Lifeline, your ward receives individualized
                  attention and customized learning plans tailored to their
                  specific needs and learning pace.
                </p>
                <p>
                  Our experienced tutors are adept at clarifying complex
                  concepts, reinforcing foundational knowledge, and igniting a
                  passion for learning. Whether it's mathematics, science,
                  language arts, or any other subject, our tutors excel in
                  guiding students toward academic excellence.
                </p>
              </div>
            </div>
            <div
              class="col-sm-12 col-md-12 col-lg-6 shadow-two d-lg-block d-none"
            >
              <div>
                <img
                  src="/images/tutor2.jpg"
                  alt=""
                  class="consultantPic mt-4"
                />
                <small>Let's start learning now.</small>
              </div>
            </div>
          </div>
        </section>

        <section class="container-lg py-3 d-block shadow-one">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 banner-smile">
              <div>
                <p class="smile">Learn with a smile. We have you covered.</p>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 bg-danger">
              <p class="lh-lg mt-lg-4 fs-4 px-lg-3 px-3 text-white fs-beauty">
                "Welcome to Lifeline's Private Tuition Service! Empowering
                students to excel academically is our passion. With personalized
                attention, tailored lesson plans, and experienced tutors, we
                strive to unlock your ward's full potential. Join us on a
                learning journey where success becomes a habit.
              </p>
            </div>
          </div>
        </section>

        <section class="container-lg py-3 d-block shadow-one">
          <div class="row">
            <h2 class="choose-title pt-3">OUR OFFERS</h2>
            <p class="offer-intro">
              Affordable Offers That Suit Your Ward's Needs and Your Budget
            </p>
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="card-offer h-70 hover">
                <h5 class="offer-header">DUO OFFER</h5>
                <ul class="card-footer list-group list-group-flush">
                  <li class="list-group-item">2 weekly sessions</li>
                  <li class="list-group-item">8 monthly sessions</li>
                  <li class="list-group-item">Preliminary Assessment</li>
                  <li class="list-group-item">Monitoring</li>
                  <li class="list-group-item">Progress Reports</li>
                  <!-- <button class="btn btn-danger btn-md my-2 offer-btn">
                  SIGN UP
                </button> -->
                </ul>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="card-offer h-70 hover">
                <h5 class="offer-header">TRI OFFER</h5>
                <ul class="list-group list-group-flush card-footer">
                  <li class="list-group-item">3 weekly sessions</li>
                  <li class="list-group-item">12 monthly sessions</li>
                  <li class="list-group-item">Preliminary Assessment</li>
                  <li class="list-group-item">Monitoring</li>
                  <li class="list-group-item">Progress Reports</li>
                  <!-- <button class="btn btn-danger btn-md my-2 offer-btn">
                  SIGN UP
                </button> -->
                </ul>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="card-offer h-70 hover">
                <h5 class="offer-header">QUAD OFFER</h5>
                <ul class="card-footer list-group list-group-flush">
                  <li class="list-group-item">4 weekly sessions</li>
                  <li class="list-group-item">16 monthly sessions</li>
                  <li class="list-group-item">Preliminary Assessment</li>
                  <li class="list-group-item">Monitoring</li>
                  <li class="list-group-item">Progress Reports</li>
                  <!-- <button class="btn btn-danger btn-md my-2 offer-btn">
                  SIGN UP
                </button> -->
                </ul>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-3">
              <div class="card-offer h-70 hover">
                <h5 class="offer-header">PENT OFFER</h5>
                <ul class="card-footer list-group list-group-flush">
                  <li class="list-group-item">5 weekly sessions</li>
                  <li class="list-group-item">20 monthly sessions</li>
                  <li class="list-group-item">Preliminary Assessment</li>
                  <li class="list-group-item">Monitoring</li>
                  <li class="list-group-item">Progress Reports</li>
                  <!-- <button class="btn btn-danger btn-md my-2 offer-btn">
                  SIGN UP
                </button> -->
                </ul>
              </div>
            </div>
          </div>
          <a
            href="#tutorFormRegister"
            class="btn btn-danger px-lg-5 btn-lg my-lg-2 allTuitionDataBtn"
            @click="display"
            >SIGN UP</a
          >
        </section>

        <!-- About us -->
        <About></About>

        <!-- WHY CHOOSE US -->
        <ChooseUs></ChooseUs>

        <!-- Quotations -->
        <section>
          <blockquote
            class="container-fluid alert-secondary p-2 bg-secondary text-white my-3 h-70"
          >
            <div class="card">
              <h3 class="choose-title pt-4">MOTIVATIONAL QUOTE</h3>
              <p class="motivate py-3 px-4">
                Students do not fail, they are failed by the schools they
                attend, the teachers they meet, the homes they come from and the
                society they grow up in. Every child has the potential to
                succeed in a supportive environment.
              </p>
            </div>
          </blockquote>
        </section>

        <!-- <section>
        <div class="container-fluid">
          <div class="row banner-half">
            <div class="col">
              <h1 class="text-white pt-4 fs-1">Ready to started?</h1>
              <button class="btn btn-success">Sign Up Now</button>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </section> -->

        <section>
          <div class="container-fluid">
            <div
              id="choose-us"
              class="carousel slide"
              data-bs-interval="6000"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  class="caro-icon active"
                  type="button"
                  data-bs-target="#choose-us"
                  data-bs-slide-to="0"
                ></button>
                <button
                  class="caro-icon"
                  type="button"
                  data-bs-target="#choose-us"
                  data-bs-slide-to="1"
                ></button>
                <button
                  class="caro-icon"
                  type="button"
                  data-bs-target="#choose-us"
                  data-bs-slide-to="2"
                ></button>
                <button
                  class="caro-icon"
                  type="button"
                  data-bs-target="#choose-us"
                  data-bs-slide-to="3"
                ></button>
                <button
                  class="caro-icon"
                  type="button"
                  data-bs-target="#choose-us"
                  data-bs-slide-to="4"
                ></button>
              </div>
              <div class="carousel-inner card-offer">
                <h2 class="choose-title">GALLERY</h2>
                <!-- </hr> This line seems to be an error; it's not a valid HTML tag -->
                <div class="carousel-item active card-body">
                  <!-- <img src="images/Caro-A.jpg" class="w-100 caro-pic" alt="..." /> -->
                  <div class="banner-half">
                    <div class="carousel-caption">
                      <h4 class="slide-head">PROFESSIONALISM</h4>
                      <p class="slide-text">
                        Our tutors are carefully recruited for their character,
                        knowledge, and professional skills.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item card-body">
                  <!-- <img src="images/Caro-A.jpg" class="caro-pic" alt="..." /> -->
                  <div class="banner-half">
                    <div class="carousel-caption">
                      <h4 class="slide-head">SKILL</h4>
                      <p class="slide-text">
                        Our educators diagnose your ward's challenges and then
                        apply methodologies and techniques to deal with it.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item card-body">
                  <!-- <img src="images/Caro-A.jpg" class="caro-pic" alt="..." /> -->
                  <div class="banner-half">
                    <div class="carousel-caption">
                      <h4 class="slide-head">PROGRESS</h4>
                      <p class="slide-text">
                        Lifeline keeps you in on the progress your ward is
                        making. Our charges are affordable as well.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item card-body">
                  <!-- <img src="images/Caro-A.jpg" class="caro-pic" alt="..." /> -->
                  <div class="banner-half">
                    <div class="carousel-caption">
                      <h4 class="slide-head">CHOICE</h4>
                      <p class="slide-text">
                        We give you a whole range of offers to choose from; we
                        then help your ward based on your choice.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item card-body">
                  <div class="banner-half">
                    <!-- <img src="images/Caro-A.jpg" class="caro-pic" alt="..." /> -->
                    <div class="carousel-caption">
                      <h4 class="slide-head">GUIDANCE</h4>
                      <p class="slide-text">
                        We provide your ward the right assistance and guidance
                        to develop at his/her own pace.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#choose-us"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#choose-us"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          <TheMessage></TheMessage>
        </section>
      </div>
    </div>
  </section>

  <!-- Contact section -->

  <div v-if="contactSection">
    <ContactUs></ContactUs>
  </div>

  <div v-if="contactSection"><Footer></Footer></div>

  <div v-if="thankYou">
    <div class="client-banner">
      <NavBar></NavBar>
    </div>
    <div class="container-sm py-2 services bg-white">
      <div class="fs-5 px-lg-5 px-2 text-start mb-lg-2 mb-3 lh-lg">
        <p class="mt-lg-5 mt-3">Dear {{ tutorRequest.parentName }},</p>
        <p class="py-lg-3 pb-lg-3 pb-2">
          Thank you for considering our tuition service for your ward's
          educational needs. We have received your request and are set to work
          on giving you an excellent tutor to help <%= student %> become an
          excellent student.
        </p>
        <p class="">
          We kindly ask for your patience within this timeframe as we strive to
          fulfill your request to the best of our ability. If you have any
          questions or additional information to share, please feel free to get
          in touch:
          <a href="tel:0246011004">0246011004</a> or
          <a href="tel:0243934353">0243934353</a>.
        </p>

        <p class="">
          Regards, <br />
          Lifeline.
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
</template>

<script>
import About from "@/components/About.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import Form from "@/components/Form.vue";
import NavBar from "@/components/NavBar.vue";
import TheMessage from "@/components/TheMessage.vue";

export default {
  name: "Private Tuition",

  data() {
    return {
      request: false,
      bigBanner: true,
      smallBanner: false,
      contactSection: true,
      thankYou: false,
      tutorRequest: {
        parentName: "",
      },
    };
  },

  methods: {
    display() {
      this.request = true;
      (this.bigBanner = false),
        (this.smallBanner = true),
        (this.contactSection = false);
    },
  },

  components: {
    About,
    ContactUs,
    Footer,
    ChooseUs,
    Form,
    TheMessage,
    NavBar,
  },
};
</script>

<style scoped></style>
