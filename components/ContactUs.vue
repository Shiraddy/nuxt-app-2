<template>
  <!-- CONTACT-SECTION -->
  <section class="container-fluid">
    <div id="contact" class="contact bg-danger py-5">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6 pt-lg-3">
          <h2 class="footer-title pt-lg-5 pt-2 hero-header">GET IN TOUCH</h2>
          <p class="px-3 motivate">
            YOU ARE JUST A PHONE CALL AWAY FROM GETTING THE SOLUTION YOU NEED
          </p>
          <div class="contact-button pb-lg-4">
            <button
              class="btn btn-lg btn-secondary phone-btn me-3"
              @click="toggleContact"
            >
              <i class="bi-telephone-outbound"></i> CALL US
            </button>
            <button
              class="btn btn-lg btn-success email-btn"
              @click="toggleEmail"
            >
              <i class="bi-envelope-fill"></i> EMAIL US
            </button>
          </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-6 laptop">
          <img class="about-tuition-image" src="/images/homepage.png" alt="" />
          <div v-if="showContact" class="phone">
            <p class="tel">
              <i class="bi-telephone-outbound"></i>Helpline: 0246-011-004
            </p>
            <p class="tel">
              <i class="bi-envelope-fill"></i>Manager: 0243-934-353
            </p>
          </div>
          <div class="email" v-if="showEmail">
            <p class="mail">Lifelineedusolutions@gmail.com</p>
            <p class="mail">Shirazadnan53@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      showContact: false,
      showEmail: false,
    };
  },

  methods: {
    toggleContact() {
      this.showContact = !this.showContact;
    },
    toggleEmail() {
      this.showEmail = !this.showEmail;
    },
  },
};
</script>

<style scoped></style>
