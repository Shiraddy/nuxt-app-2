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
              We provide your school / organization holistic solutions to propel
              it to the next level. Let us help make the journey easier...
            </p>
            <div class="ms-lg-5 my-2 my-lg-2 text-center text-lg-start">
              <button
                @click="formToggle"
                class="btn btn-info btn-lg shadow-two animate__animated animate__bounceIn"
              >
                BOOK SESSION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container-sm py-3 services mt-lg-5">
    <section v-if="consultancyForm">
      <div class="container py-4 form-apply shadow-three">
        <form>
          <div class="row g-3 text-start">
            <div class="text-center fw-bolder fs-beauty text-secondary">
              <h3>Consultancy Form</h3>
            </div>

            <div class="col-lg-6">
              <label for="">Name of School/Organization</label>
              <InputText
                type="text"
                class="apply-input shadow-three"
                v-model="form.nameOfOrg"
              />
            </div>
            <div class="col-lg-6">
              <label for="Email">Email</label>
              <InputText
                type="text"
                class="apply-input shadow-three"
                v-model="form.email"
              />
            </div>
            <div class="col-lg-6">
              <label for="contact">Contact</label>
              <InputText
                type="text"
                class="apply-input shadow-three"
                v-model="form.contact"
              />
            </div>
            <div class="col-lg-6">
              <label for="position"> Designation/Position</label>
              <InputText
                type="text"
                class="apply-input shadow-three"
                v-model="form.designation"
              />
            </div>

            <div class="col-lg-6">
              <label for="Address">Address</label>
              <InputText
                type="text"
                v-model="form.address"
                class="apply-input shadow-three"
              />
            </div>

            <div class="col-12">
              <p>{{ form.message }}</p>
              <label for="">Message</label>
              <Editor
                v-model="form.message"
                editorStyle="height: 250px"
                class="shadow-three"
              />
            </div>
          </div>
          <div class="my-3 text-end">
            <button class="btn btn-danger mx-4 px-4 shadow-three" type="reset">
              Clear
            </button>
            <button class="btn btn-success px-4 shadow-three" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>

    <div v-if="page">
      <section>
        <h2 class="choose-title mt-lg-5 mt-3">
          <span class="p-overlay-badge">
            <Badge value="MY" severity="contrast" size="large"></Badge>
          </span>
          CONSULTANT
        </h2>
        <h2 class="fs-2 pt-2 mb-0 fw-bolder"></h2>
        <h5 class="text-dark-emphasis mt-0">LET'S GET STARTED..</h5>
        <div class="row gy-4 gx-3">
          <div class="col-lg-4">
            <div class="card card-body">
              <nuxt-img class="card-image" src="/images/consul3.jpg" alt="" />
              <div class="card-title">Educational Technology</div>
              <p class="card-text text-dark-emphasis">
                We help schools use technology to assist in effective school
                management. This includes website creation and management. etc
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-body">
              <nuxt-img class="card-image" src="/images/consul5.jpg" alt="" />
              <div class="card-title">Recruitment</div>
              <p class="card-text text-dark-emphasis">
                Let us handle your teacher recruitment and monitoring needs for
                you. We take things to the next level.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card card-body">
              <nuxt-img class="card-image" src="/images/consul2.jpg" alt="" />
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
            <nuxt-img
              class="consultantPic pt-3"
              src="/images/website.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6 text-white shadow-two bg-success py-lg-5">
            <h3>Online Presence</h3>
            <p class="text-start lh-lg px-2">
              We understand the significance of a strong online presence in
              fostering communication, enhancing accessibility, and showcasing
              the achievements and offerings of your esteemed institution. With
              our expertise in leveraging advanced technology, we aim to assist
              your school in securing a prominent place on the internet,
              enabling your stakeholders to benefit significantly
            </p>
          </div>
        </div>
      </section>

      <div class="row my-4 py-5 px-lg-3">
        <div class="col-lg-6 bg-white pt-4 shadow-two">
          <nuxt-img class="consultantPic" src="/images/consul5.jpg" alt="" />
        </div>
        <div class="col-lg-6 px-lg-4 px-2 bg-white pt-lg-4 shadow-two">
          <h3 class="mb-0">Teacher Training</h3>
          <h6 class="text-body-secondary">
            Enhance Your Skill with Expert Guidance
          </h6>
          <div class="text-start lh-lg text-dark-emphasis px-3">
            <p>
              At Lifeline Educational Solutions, we're passionate about
              empowering educators to excel in their craft!
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
  </div>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>
export default {
  name: "Consultancy Page",
  data() {
    return {
      consultancyForm: false,
      page: true,
      form: {
        nameOfOrg: "",
        email: "",
        contact: "",
        address: "",
        designation: "",
        message: "",
      },
    };
  },

  methods: {
    formToggle() {
      this.consultancyForm = !this.consultancyForm;
      this.page = !this.page;
    },
  },
};
</script>

<style scoped></style>
