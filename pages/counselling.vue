<template>
  <section>
    <section>
      <div
        class=""
        :class="description ? 'counsel-banner' : 'counsel-banner-half'"
      >
        <NavBar></NavBar>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6"></div>
            <div
              class="col-lg-6 text-white my-5 service-hero-text text-start res-hero"
              :class="description ? 'd-block' : 'd-none'"
            >
              <h1 class="hero-header mt-lg-5 mt-5 mb-0 pt-lg-3 pt-3">
                ARE YOU IN NEED OF
                <span class="text-primary shadow-two">GUIDANCE?</span>
                ...
              </h1>
              <p class="hero-text fs-5 mt-0">
                Here at Lifeline, We can connect you to a professional
                counsellor to assist you with your challenge.
                <br />
                <a
                  href="#booking"
                  class="btn btn-primary btn-lg shadow-two mx my-3 bookSession animate__animated animate__bounceIn"
                  @click="formToggle()"
                >
                  ADVISE ME
                  <i class="fa fa-arrow-circle-o-down"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-sm py-2 services">
        <div class="counsellingIntro" v-if="description">
          <h2 class="choose-title mt-lg-5 mt-3">
            COUNSEL
            <span class="p-overlay-badge">
              <Badge value="Me" severity="contrast" size="large"></Badge>
            </span>
          </h2>
          <p class="mt-0 text-secondary">
            Empower Your Ward's Future with Lifeline's Guidance and Counseling
            Services
          </p>
          <div class="my-5 py-3">
            <div class="row gx-5">
              <div class="col-lg-4 col-sm-12">
                <div>
                  <nuxt-img
                    src="/images/career.jpg"
                    alt=""
                    class="con-image my-2"
                  />

                  <!-- <nuxt-img src="/images/con8.gif" alt="" class="con-image round" /> -->
                  <h5 class="fw-bolder">Career Guidance</h5>
                  <p class="px-2 px-lg-4 text-body-secondary">
                    Make the right decisions about your career path. Seek
                    professional counsel.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-sm-12">
                <div>
                  <nuxt-img
                    src="/images/academic.jpg"
                    alt=""
                    class="con-image my-2"
                  />

                  <!-- <nuxt-img src="/images/con2.gif" alt="" class="con-image" /> -->
                  <h5 class="fw-bolder">Academic Guidance</h5>
                  <p class="px-2 px-lg-4 text-body-secondary">
                    Get the right advice to make informed educational choices.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-sm-12">
                <div class="">
                  <nuxt-img
                    src="/images/coun.jpg"
                    alt=""
                    class="con-image my-2"
                  />
                  <!-- <nuxt-img src="/images/con3.gif" alt="" class="con-image" /> -->
                  <h5 class="fw-bolder">Counselling Service</h5>
                  <p class="px-2 px-lg-4 text-body-secondary">
                    Let us help you through your challenges. Get the right
                    guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div class="row bg-primary shadow-one">
              <div
                class="col-lg-5 d-flex align-items-center justify-content-center"
              >
                <nuxt-img
                  src="/images/decision.png"
                  alt=""
                  class="py-3 decision"
                />
                <!-- <nuxt-img src="/images/conso2.png" alt="" class="py-3" /> -->
              </div>
              <div class="col-lg-7 text-white py-lg-3 py-2 px-3 px-lg-5">
                <h3 class="mb-0">WANT TO MAKE A DECISION?</h3>
                <h5 class="text-white">We can help you:</h5>

                <ol class="text-start my-2">
                  <li class="my-2 px-lg-3 fs-beauty">
                    With your school and course selection. We can guide you
                    through the application processes and help review your
                    applications.
                  </li>
                  <li class="my-2 px-lg-3 fs-beauty">
                    Explore your career options in relation to your ward's/your
                    strengths, interest, and the training and qualification
                    requirements.
                  </li>
                  <li class="my-2 px-lg-3 fs-beauty">
                    Choose the right schools for your child, whether it's
                    public, private, or boarding schools, considering academic
                    needs, and location preferences.
                  </li>
                  <li class="my-2 px-lg-3 fs-beauty">
                    Advice on curriculum choices, course selection, and academic
                    planning for students at different educational levels.
                  </li>
                  <li class="my-2 px-lg-3 fs-beauty">
                    Understand the different stages of child growth and how to
                    have better parent-child relations?
                  </li>
                  <li class="my-2 px-lg-3 fs-beauty">
                    With professional guidance to assist your ward overcome
                    challenges such as drug and substance use and abuse,
                    truancy, negative peer influence, etc
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <div class="row my-5 gy-3 gx-5">
              <div class="col-lg-6 text-start">
                <h2 class="">
                  <span class="text-danger fs-1">O</span>ur Guidance &
                  Counselling
                </h2>
                <p class="text-body-secondary lh-lg">
                  At Lifeline Educational Solutions Limited, we understand that
                  making crucial decisions about education and personal growth
                  can be daunting. That's why our expert guidance and counseling
                  services are here to navigate this journey with you and your
                  ward.
                </p>
                <Button label="Book Session" @click="formToggle()" raised />
              </div>
              <div class="col-lg-6">
                <nuxt-img src="/images/next.jpg" alt="" class="decision" />
                <!-- <nuxt-img src="/images/conso3.png" alt="" /> -->
              </div>
            </div>
          </section>

          <section>
            <div class="row my-5 bg-primary">
              <div
                class="col-lg-6 text-lg-start py-lg-5 py-2 text-white px-3 px-lg-4"
              >
                <h2>Ready to Move to the Next Level?</h2>
                <p>Speak to a professional Counsellor Today</p>
                <!-- <button
                  class="btn btn-success bookSession"
                  @click="formToggle()"
                >
                  Book Session
                </button> -->
                <Button label="Book Session" @click="formToggle()" raised />
              </div>
              <div class="col-lg-6">
                <nuxt-img
                  src="/images/call3.png"
                  alt=""
                  class="caller"
                  quality="80"
                />
                <!-- <nuxt-img src="/images/call3.png" alt="" class="caller" /> -->
              </div>
            </div>
          </section>

          <section>
            <div class="row my-5 py-3 text-center">
              <div class="col-lg-12">
                <div class="px-3 lead">
                  <h2>Have a Challenge?</h2>
                  <p class="fs-beauty">
                    Talk to us about your challenge(s). We are a dependable
                    partner, ready to offer you solutions!
                  </p>
                  <!-- <router-link to="/" target="_blank" rel="noopener">
                  </router-link> -->
                  <Button
                    label="Let's Start"
                    class="animate__animated animate__zoomIn animate__slower"
                    @click="formToggle()"
                  />
                  <!-- <h3>What Challenge Are You Facing?</h3>
                  <ol class="text-start text-dark-50 fs-beauty px-lg-3 px-2">
                    <li class="my-2 text-dark-emphasis">
                      Do you need someone to talk to about your ward's
                      challenge?
                    </li>
                    <li class="my-2 text-dark-emphasis">
                      Do you need a helping hand in dealing with your ward?
                    </li>
                    <li class="my-2 text-dark-emphasis">
                      Are you in need professional advice on raising discipline
                      children?
                    </li>
                    <li class="my-2 text-dark-emphasis">
                      Do you need professional touch to your decisions?
                    </li>
                    <li class="my-2 text-dark-emphasis">
                      Do you need a counsellor to help you have better
                      parent-child relations?
                    </li>
                    <li class="my-2 text-dark-emphasis">
                      Do you want information on how to help your ward overcome
                      a challenge?
                    </li>
                  </ol> -->
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- FORM -->
        <div v-if="formVisibility">
          <form class="form-apply" @submit.prevent="submitForm" id="booking">
            <h4 class="fs-2 py-3">BOOK COUNSELLING SESSION</h4>
            <div v-if="personalInfo">
              <div
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check px-3"
                  id="btnradio1"
                  name="client_type"
                  @click="parent()"
                  autocomplete="off"
                  checked
                />
                <label class="btn btn-outline-primary" for="btnradio1"
                  >Guardian</label
                >

                <input
                  type="radio"
                  class="btn-check px-3 studentCounsellingBtn"
                  id="btnradio2"
                  name="client_type"
                  @click="student()"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio2"
                  >Student</label
                >
              </div>
              <!-- personal Info -->
              <div class="py-3">
                <!-- Parent/Guardian -->
                <fieldset
                  class="row py-5 parentCounselling"
                  v-if="parentToggle"
                >
                  <h5 class="text-start text-success">Parent/Guardian</h5>
                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="parentName"
                      >Parent's Name</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="text"
                      v-model="counsellingForm.parent"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="parentContact"
                      >Contact</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="tel"
                      v-model="counsellingForm.contact"
                      maxlength="10"
                      minlength="10"
                      placeholder="Enter your contact"
                    />
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="parentAltContact"
                      >Other Contact</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="tel"
                      v-model="counsellingForm.otherContact"
                      maxlength="10"
                      minlength="10"
                      placeholder="Enter your other contact (If any)"
                    />
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="parentEmail"
                      >Email</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="email"
                      v-model="counsellingForm.email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </fieldset>

                <!-- Child/Student -->
                <fieldset class="row studentCounselling">
                  <h5 class="text-start text-success">Child/Student</h5>
                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="childName"
                      >Name</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="text"
                      v-model="counsellingForm.counselee"
                      placeholder="Enter your child's name"
                    />
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="childAge">Age</label>
                    <input
                      class="form-control shadow-two"
                      type="date"
                      v-model="counsellingForm.age"
                      placeholder="Enter your child's age"
                    />
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="childSchool"
                      >School (Optional)</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="text"
                      v-model="counsellingForm.school"
                      placeholder="Enter your child's school name (optional)"
                    />
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="childGrade"
                      >Grade/Class</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="text"
                      v-model="counsellingForm.class"
                      placeholder="Enter your child's grade/class"
                    />
                  </div>

                  <div
                    class="col-lg-6 my-2 studentContactDetails"
                    v-if="!parentToggle"
                  >
                    <label class="label-counselling" for="studentContact"
                      >Contact</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="tel"
                      v-model="counsellingForm.contact"
                      maxlength="10"
                      minlength="10"
                      placeholder="Enter your contact"
                    />
                  </div>

                  <div
                    class="col-lg-6 my-2 studentContactDetails"
                    v-if="!parentToggle"
                  >
                    <label class="label-counselling" for="parentEmail"
                      >Email</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="email"
                      v-model="counsellingForm.email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </fieldset>

                <!-- Challenges -->
                <fieldset>
                  <!-- <h5 class="text-start">Challenges</h5> -->
                  <div class="row">
                    <div class="col-lg-12 col-12 my-2">
                      <label class="label-counselling" for="reason"
                        >Reason for Counselling Request</label
                      >
                      <textarea
                        v-model="counsellingForm.reason"
                        class="form-control shadow-two"
                        placeholder="Tell us more about your challenge"
                      ></textarea>
                      <div class="text-start">
                        <small
                          >Characters left:
                          {{ 100 - counsellingForm.reason.length }}</small
                        >
                      </div>
                    </div>

                    <!-- <div class="col-lg-12 col-12 my-2">
              <label class="label-counselling" for="additionalComments"
                >Additional Comments or Concerns</label
              >
              <textarea
                name="additionalComments"
                id="additionalComments"
                class="form-control shadow-two"
                placeholder="In about 150 words or less."
              ></textarea>
            </div> -->
                  </div>
                  <div class="d-flex my-4 justify-content-between">
                    <small>1/2</small>
                    <button class="btn btn-primary" @click="stage2()">
                      Next Stage
                    </button>
                  </div>
                </fieldset>
              </div>

              <!-- Preferences -->
            </div>
            <div v-if="preference">
              <fieldset>
                <div class="row my-5">
                  <h5 class="text-start text-success">
                    Counselling Preferences
                  </h5>
                  <h5 class="alert alert-success sticky-top">
                    Charge per session: Ghc {{ charge }}.00
                  </h5>
                  <div class="col-lg-6">
                    <label class="label-counselling" for="preferredMode"
                      >Preferred Mode</label
                    >
                    <select
                      v-model="counsellingForm.mode"
                      class="form-control shadow-two"
                      @change="charge()"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="In-person">In-person</option>
                    </select>
                  </div>

                  <div class="col-lg-6">
                    <label class="label-counselling" for="preferredMode"
                      >Preferred Duration</label
                    >
                    <select
                      v-model.number="counsellingForm.duration"
                      @change="charge()"
                      class="form-control shadow-two"
                      required
                    >
                      <option value="">Select Session Duration</option>
                      <option value="0.5">30 minutes</option>
                      <option value="1">1 hour</option>
                      <option value="1.5">1.5 hours</option>
                      <option value="2">2 hours</option>
                      <!-- Other duration options -->
                    </select>
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="urgency"
                      >Urgency</label
                    >
                    <select
                      class="form-control shadow-two"
                      v-model="counsellingForm.urgency"
                      @change="charge()"
                      required
                    >
                      <option value="" disabled>
                        Please Indicate Urgency of Issue
                      </option>
                      <option value="Urgent">Urgent</option>
                      <option value="Moderately Urgent">
                        Moderately Urgent
                      </option>
                      <option value="Not Urgent">Not Urgent</option>
                    </select>
                  </div>

                  <div class="col-lg-6 my-2">
                    <label class="label-counselling" for="preferredDate"
                      >Preferred Session Date & Time</label
                    >
                    <input
                      class="form-control shadow-two"
                      type="date"
                      v-model="counsellingForm.date"
                      required
                    />
                  </div>

                  <div class="col-lg-12 col-12 my-2">
                    <label class="label-counselling" for="specialRequest"
                      >Special Request (If any)</label
                    >
                    <textarea
                      name="specialRequest"
                      class="form-control shadow-two"
                      v-model="counsellingForm.specialRequest"
                      placeholder="Do you have any special request? "
                    ></textarea>
                    <div class="text-start">
                      <small>
                        Remaining Characters
                        {{ counsellingForm.specialRequest.length }}/100
                      </small>
                    </div>
                  </div>

                  <div class="col-lg-12 my-4">
                    <div class="text-start bg-danger py-2 text-white">
                      <h5 class="ms-lg-3">Note The Following:</h5>
                      <ol>
                        <li>
                          <small
                            >Additional charges will be incurred for follow-up
                            and Special Request(s).</small
                          >
                        </li>
                        <li>
                          <small
                            >Payment to be made before service delivery.</small
                          >
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <fieldset class="my-3 py-2 d-flex justify-content-between">
                  <small>2/2</small>
                  <div>
                    <button
                      class="btn btn-danger mx-3"
                      type="text"
                      @click="stage1()"
                    >
                      Back
                    </button>

                    <button
                      class="btn btn-success"
                      type="submit"
                      @click="submitCounselling"
                    >
                      Send
                      <div
                        class="spinner-border spinner-border-sm counselspin"
                        role="status"
                        v-if="submitCounselling"
                      ></div>
                    </button>
                  </div>
                </fieldset>
              </fieldset>
            </div>
            <!-- up now -->
          </form>
        </div>
      </div>
    </section>

    <div v-if="postMessage">
      <div class="counsel-banner-half"></div>
      <div class="container-sm py-2 services">
        <div class="px-lg-5 px-2 text-start mb-lg-2 mb-3">
          <div class="mt-lg-5 mt-3 fs-5">
            <p>
              Dear {{ counsellingForm.parentName || counsellingForm.counselee }}
            </p>
            <p class="py-lg-3 lh-lg pb-lg-3 pb-2">
              Thank You for reaching out to us. We have received your message.
              An officer will get back to you shortly to discuss the next steps.
              You can reach us on
              <a href="tel:0246011004">0246011004</a> or
              <a href="tel:0243934353">0243934353</a>. Thank you.
            </p>
            <p>
              Regards, <br />
              Lifeline Management.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ContactUs></ContactUs>
    <Footer></Footer>
  </section>
</template>

<script>
import About from "@/components/About.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import TheMessage from "@/components/TheMessage.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import NavBar from "@/components/NavBar.vue";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   deleteDoc,
//   addDoc,
//   setDoc,
//   doc,
//   updateDoc,
// } from "firebase/firestore";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCBifZJX3PdlX-rplxV8NC6NItIG_dCTEM",
//   authDomain: "lifeline-edu-site.firebaseapp.com",
//   projectId: "lifeline-edu-site",
//   storageBucket: "gs://lifeline-edu-site.appspot.com/",
//   storageBucket: "lifeline-edu-site.appspot.com",
//   messagingSenderId: "1059969595497",
//   appId: "1:1059969595497:web:5e6ee511c2174333ec8af8",
// };

// const firebase = initializeApp(firebaseConfig);
// const db = getFirestore(firebase);
// const auth = getAuth(firebase);

export default {
  name: "Counselling",
  components: {
    About,
    ContactUs,
    Footer,
    TheMessage,
    ChooseUs,
    NavBar,
  },

  data() {
    return {
      postMessage: false,
      parentToggle: true,
      description: true,
      formVisibility: false,
      personalInfo: true,
      preference: false,
      submitCounselling: false,
      counsellingForm: {
        parentName: "",
        contact: "",
        otherContact: "",
        email: "",
        counselee: "",
        age: "",
        school: "",
        class: "",
        counseleeContact: "",
        counseleeEmail: "",
        reason: "",
        additionalComments: "",
        mode: "",
        date: "",
        duration: "",
        urgency: null,
        sessionDate: "",
        specialRequest: "",
        charge: 0,
      },
    };
  },

  methods: {
    formToggle() {
      this.formVisibility = !this.formVisibility;
      this.description = !this.description;
    },

    student() {
      return (this.parentToggle = false);
    },

    parent() {
      return (this.parentToggle = true);
    },

    stage2() {
      if (this.personalInfo) {
        this.personalInfo = false;
        this.preference = true;
      }
    },

    stage1() {
      if (this.preference) {
        this.preference = false;
        this.personalInfo = true;
      }
    },

    async submitForm(e) {
      this.submitCounselling = true;
      try {
        const message = this.counsellingForm;
        const MessageRef = await addDoc(
          collection(db, "Counselling Request"),
          message
        );
        console.log("Document written with ID: ", MessageRef.id);
        // this.sentFollowUp = true;
        // this.contactUs.sender = "";
        // this.contactUs.email = "";
        // this.contactUs.contact = "";
        // this.contactUs.type = "";
        // this.contactUs.message = "";
      } catch {
        console.log("Counselling Form", this.counsellingForm);
      }
    },
  },

  computed: {
    charge() {
      let form = this.counsellingForm;
      let mode = form.mode;
      let duration = form.duration;
      let baseCharge = 0;

      // Calculation logic
      if (mode === "Phone Call") {
        if (duration === 0.5) baseCharge = 100;
        else if (duration === 1) baseCharge = 150;
        else if (duration === 1.5) baseCharge = 200;
        else if (duration === 2) baseCharge = 300;
      } else if (mode === "In-person") {
        if (duration === 0.5) baseCharge = 200;
        else if (duration === 1) baseCharge = 300;
        else if (duration === 1.5) baseCharge = 400;
        else if (duration === 2) baseCharge = 500;
      } else if (mode === "WhatsApp") {
        if (duration === 0.5) baseCharge = 100;
        else if (duration === 1) baseCharge = 150;
        else if (duration === 1.5) baseCharge = 200;
        else if (duration === 2) baseCharge = 250;
      }

      let urgencyIncrement = 0;
      const urgency = this.counsellingForm.urgency;

      if (urgency === "Urgent") urgencyIncrement = 0.3;
      else if (urgency === "Moderately Urgent") urgencyIncrement = 0.2;

      let totalPrice = baseCharge * (1 + urgencyIncrement);
      this.counsellingForm.charge = totalPrice;
      return totalPrice;
    },
  },
};
</script>

<style scoped>
.decision {
  width: 90%;
  max-width: 95%;
}
</style>

<!-- Icons -->
<!-- <i class="bi-backspace pe-2"></i> -->
<!-- <i class="bi-calendar2-fill pe-2"></i> -->
<!-- <i class="fa fa-arrow-circle-o-right"></i> -->
<!-- <i class="fa fa-arrow-circle-o-left"></i> -->
