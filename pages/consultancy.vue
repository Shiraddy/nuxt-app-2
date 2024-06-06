<template>
  <section>
    <div class="consult-banner">
      <NavBar></NavBar>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6 text-white text-start res-hero mt-sm-5">
            <h2 class="hero-header mt-lg-5 fs-1">
              A JOURNEY TOWARDS <span class="text-info">GREATNESS...</span>
            </h2>
            <p class="hero-text fs-beauty">
              We provide your school holistic solutions to propel it to the next
              level. Let us help make the journey easier...
            </p>
            <div class="ms-lg-5 my-2 my-lg-2 text-center text-lg-start">
              <button class="btn btn-info btn-lg shadow-two">
                BOOK SESSION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container-sm py-3 services">
    <section>
      <h2 class="fs-2 pt-2 mb-0 fw-bolder">EDUCATIONAL CONSULTANCY</h2>
      <h5 class="text-dark-emphasis mt-0">
        We Offer the Following Consultancy Services
      </h5>
      <div class="row">
        <div class="col-lg-4">
          <div class="card card-body">
            <img class="card-image" src="/images/consul3.jpg" alt="" />
            <div class="card-title">Educational Technology</div>
            <p class="card-text text-dark-emphasis">
              We help schools use technology to assist in effective school
              management. This includes website creation and management. etc
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card card-body">
            <img class="card-image" src="/images/consul5.jpg" alt="" />
            <div class="card-title">Service Training</div>
            <p class="card-text text-dark-emphasis">
              We offer refresher trainings in teaching methodologies and techniques,
              classroom management, effective teacher-student communication,
              lesson-notes-preparation, etc
            </p>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card card-body">
            <img class="card-image" src="/images/consul2.jpg" alt="" />
            <div class="card-title">Strategic Planning</div>
            <p class="card-text text-dark-emphasis">
              We assist schools in developing long-term strategic plans,
              defining their vision, mission, and values, and aligning their
              resources to achieve their educational goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="row my-4 mx-lg-2">
        <div class="col-lg-6 shadow-two bg-success py-lg-5">
          <img class="consultantPic pt-3" src="/images/website.jpg" alt="" />
        </div>
        <div class="col-lg-6 text-white shadow-two bg-success py-lg-5">
          <h3>Online Presence</h3>
          <p class="text-start lh-lg px-2">
            We understand the significance of a strong online presence in
            fostering communication, enhancing accessibility, and showcasing the
            achievements and offerings of your esteemed institution. With our
            expertise in leveraging advanced technology, we aim to assist your
            school in securing a prominent place on the internet, enabling your
            stakeholders to benefit significantly
          </p>
        </div>
      </div>
    </section>

    <div class="row my-4 py-5 px-lg-3">
      <div class="col-lg-6 bg-white pt-4 shadow-two">
        <img class="consultantPic" src="/images/consul5.jpg" alt="" />
      </div>
      <div class="col-lg-6 px-lg-4 px-2 bg-white pt-lg-4 shadow-two">
        <h3 class="mb-0">Teacher Training</h3>
        <h6 class="text-body-secondary">
          Enhance Your Skill with Expert Guidance
        </h6>
        <div class="text-start lh-lg text-dark-emphasis px-3">
          <p>
            At Lifeline Educational Solutions, we're passionate about empowering
            educators to excel in their craft!
          </p>

          <p>
            Our tailored teacher training services are designed to equip you
            with cutting-edge methodologies and techniques that amplify
            classroom success.
          </p>

          <p>
            From honing classroom management strategies to fostering effective
            teacher-student communication, crafting engaging lesson plans, and
            mastering note preparation.
          </p>
        </div>
      </div>
    </div>
    <div class="my-5">
      <About></About>
    </div>

    <div class="my-5">
      <ChooseUs></ChooseUs>
    </div>
    <TheMessage></TheMessage>
  </div>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>
import About from "@/components/About.vue";
import ContactUs from "@/components/ContactUs.vue";
import Footer from "@/components/Footer.vue";
import TheMessage from "@/components/TheMessage.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Consultancy Page",
  components: {
    About,
    ContactUs,
    Footer,
    TheMessage,
    ChooseUs,
    NavBar,
  },
};
</script>

<style scoped></style>
