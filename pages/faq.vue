<template>
  <div class="container-fluid">
    <div class="row">
      <div class="client-banner">
        <NavBar></NavBar>
      </div>
      <!-----------APPLICATION FORM------------>

      <div class="container-sm services py-lg-5">
        <!-- TOP MENU AND SWITCH BUTTON -->

        <section>
          <div>
            <h4 class="py-lg-3 py-2 bg-white">FREQUENTLY ASKED QUESTIONS</h4>
            <hr />
            <h4>FAQ FOR:</h4>
            <div class="mb-4">
              <div
                class="btn-group pb-lg-4"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  id="vbtn-radio1"
                  type="radio"
                  class="btn-check"
                  @click="activeTab = 'ParentFaq'"
                  name="vbtn-radio"
                  autocomplete="off"
                  checked
                />
                <label
                  id="parentFaqBtn"
                  class="btn btn-outline-primary btn-lg"
                  for="vbtn-radio1"
                  >PARENT</label
                >
                <input
                  id="vbtn-radio2"
                  type="radio"
                  class="btn-check"
                  @click="activeTab = 'TutorFaq'"
                  name="vbtn-radio"
                  autocomplete="off"
                />
                <label
                  id="tutorFaqBtn"
                  class="btn btn-outline-success btn-lg"
                  for="vbtn-radio2"
                  >TUTORS</label
                >
              </div>
            </div>
          </div>
        </section>

        <!-- <ParentFaq v-if="activeTab === 'ParentFaq'"></ParentFaq>
        <TutorFaq v-if="activeTab === 'TutorFaq'"></TutorFaq> -->
        <component :is="activeTab" />

        <div class="faq-help fs-5">
          <h4>We hope we have provided satisfying answers.</h4>
          <p>if you need further assistance?</p>
          <h4>Call us on:</h4>
          <h6>0246-601-1004 or 0243934353</h6>
        </div>
      </div>
    </div>
  </div>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";
import ContactUs from "@/components/ContactUs.vue";
import ParentFaq from "@/components/ParentFaq.vue";
import TutorFaq from "@/components/TutorFaq.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Faq",
  components: {
    ParentFaq,
    TutorFaq,
    Footer,
    ContactUs,
    NavBar,
  },
  data() {
    return {
      activeTab: "ParentFaq",
    };
  },
};
</script>

<style scoped></style>
