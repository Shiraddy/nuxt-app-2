<template>
  <div class="container-fluid my-5">
    <div class="row my-3 shadow-one">
      <div class="col-lg-6 d-none d-lg-block">
        <div class="card fs-beauty"></div>
      </div>
      <div class="col-lg-6 bg-white shadow-two">
        <h4 class="my-lg-4 my-3">CONTACT US</h4>
        <form @submit.prevent="contactForm" class="">
          <div class="">
            <label for="type" class="label">Topic:</label>
            <inputText
              type="text"
              class="apply-input shadow-three"
              v-model="contactUs.type"
              placeholder="Type your topic"
            />
          </div>

          <div class="">
            <label for="name" class="label">Name</label>
            <inputText
              type="text"
              name="name"
              v-model.trim="contactUs.sender"
              required
              placeholder="Please Enter Your Full Name"
              class="apply-input shadow-three"
            />
          </div>

          <div class="">
            <label for="email" class="label">Email</label>
            <inputText
              type="email"
              name="email"
              v-model.trim="contactUs.email"
              required
              placeholder="Please Enter Your Email"
              class="apply-input shadow-three"
            />
          </div>

          <div class="">
            <label for="contact" class="label">Contact</label>
            <inputText
              type="tel"
              required
              v-model.trim="contactUs.contact"
              name="contact"
              placeholder="Enter your phone number"
              class="apply-input shadow-three"
            />
          </div>

          <div class="">
            <label for="message" class="label">Message</label>
            <textarea
              class="shadow-three apply-input mb-0"
              v-model.trim="contactUs.message"
              required
              placeholder="Space for your message"
            ></textarea>
            <div class="d-lg-flex justify-content-between mt-0">
              <small class="">
                Message Max Word Limit: {{ contactUs.message.length }}/250
              </small>
              <small class="text-danger" v-if="messageError"
                >Check your message length.</small
              >
            </div>
            <br />
          </div>
          <!-- <input type="text" name="news" placeholder="News" /> -->
          <div class="d-flex justify-content-center">
            <div
              class="g-recaptcha"
              data-sitekey="6LfF3-4pAAAAAO88POyzMjDEAOjovG4py-UMc0Wt"
            ></div>
          </div>

          <div class="py-1">
            <button class="btn btn-success shadow-two" type="submit">
              SEND MESSAGE
              <span id="loading-spinner" v-if="wheel">
                <div
                  class="spinner-border spinner-border-sm text-white"
                  role="status"
                ></div>
              </span>
            </button>
            <div class="alert">
              <p>{{ messageStatus }}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- <div class="client-banner"></div> -->
  <div v-if="sentFollowUp" class="py-2 services">
    <p class="py-lg-3 lh-lg pb-lg-3 pb-2 alert alert-success">
      Thank You for reaching out to us. We have received your message and will
      get back to you shortly. Please do well to call .
      <a href="tel:0246011004">0246011004</a> or
      <a href="tel:0243934353">0243934353</a> if it is urgent. Thank you.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactUs: {
        sender: "",
        email: "",
        contact: "",
        type: "",
        message: "".substring(0, 250),
        date: new Date(),
      },
      sentFollowUp: false,
      MessageSent: true,
      disableBtn: false,
      messageError: false,
      wheel: false,
      positive: true,
      messageStatus: null,
    };
  },

  methods: {
    async contactForm() {
      // console.log("Contact Form", this.contactUs);
      if (this.contactUs.message.length > 250) {
        this.messageError = true;
      } else {
        try {
          this.messageError = false;
          this.wheel = true;
          const message = this.contactUs;
          const MessageRef = await addDoc(collection(db, "Messages"), message);
          console.log("Document written with ID: ", MessageRef.id);
          this.sentFollowUp = true;
          this.contactUs.sender = "";
          this.contactUs.email = "";
          this.contactUs.contact = "";
          this.contactUs.type = "";
          this.contactUs.message = "";
        } catch {
          this.wheel = false;
          this.positive = false;
          console.error("Error Sending Message", error);
        }
      }
    },
  },

  inheritAttrs: false,
};
</script>

<style scoped>
/* .banner {
  height: 10rem;
} */
</style>
