<template>
  <!------------TUTORS SECTION------------->
  <section  class="shadow-one my-3">
    <div class="container-fluid py-2 my-5">
      <div class="row">
        <h3 class="choose-title mt-4">OUR AMAZING TUTORS</h3>
        <p class="text-dark-emphasis">Meet some of our Lifeline tutors</p>
        <div class="col-sm-12 col-md-12 col-lg-4 hover">
          <div class="card myCard h-70">
            <img
              class="service-image"
              src="/images/Pic.png"
              alt="images/Pic.png"
            />
            <h4 class="card-header">Hafiz Shamsiya</h4>
            <p class="card-footer">Degree in B,Ed Stu., UDS.</p>
          </div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-4 hover">
          <div class="card myCard h-70">
            <img
              class="service-image"
              src="/images/Pic.png"
              alt="images/Pic.png"
            />
            <h4 class="card-header">Mohammed Mujahid</h4>
            <p class="card-footer">Diploma in Education, UCC</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4 hover">
          <div class="card myCard h-70">
            <img
              class="service-image"
              src="/images/Pic.png"
              alt="images/Pic.png"
            />
            <h4 class="card-header">Mohammed Shafik</h4>
            <p class="card-footer">Diploma in Education, TATCO</p>
          </div>
        </div>
      </div>
      <RouterLink class="btn btn-danger mb-2" to="/apply"
        >JOIN LIFELINE <i class="bi-people me-2"></i
      ></RouterLink>
    </div>
  </section>

  <!-- <div class="container shadow-one my-3">
    <div class="banner-half row">
      <div class="col-lg-7 apply-text">
        <h3>Become a Lifeline Tutor</h3>
        <p>
          Apply to Lifeline to start receiving tutorial assignments from us. Get
          access to quality materials and resources to become an effective
          tutor. Here at Lifeline, we redefine private tuition
        </p>
        <RouterLink class="btn btn-lg btn-success" to="/apply"
          >Become a Lifeline Tutor</RouterLink
        >
      </div>
      <div class="col-lg-5"></div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "TutorList",
  data() {
    return {
      tutor: [
        {
          id: 1,
          name: "",
          school: "",
          experience: "",
        },

        {
          id: 2,
          name: "",
          school: "",
          experience: "",
        },

        {
          id: 3,
          name: "",
          school: "",
          experience: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
