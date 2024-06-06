<template>
  <section class="shadow-two">
    <NavTwo></NavTwo>
    <div class="container-fluid">
      <div class="row hero-page">
        <div class="col-lg-5 hero-text-section">
          <h1 class="hheader">
            We offer Educational
            <span class="text-success">Solutions</span>
          </h1>
          <p class="text-secondary fs-5 hero-desc">
            We offer Private tuition, Consultancy, and Guidance and Counselling.
          </p>
          <Button label="Explore..." icon="pi pi-expand" raised />
        </div>
        <div class="col-lg-7 hero-image-section">
          <!-- <div class="dot"></div> -->
          <div class="">
            <img
              class="hero-image tutor-image"
              src="/images/tutorCrop.jpg"
              alt=""
            />
            <img
              class="hero-image consul-image"
              src="/images/consul5Crop.jpg"
              alt=""
            />
            <img
              class="hero-image counsel-image"
              src="/images/counselCrop.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./NavBar.vue";
import NavTwo from "./NavTwo.vue";
export default {
  name: "Carousel",
  components: {
    NavTwo,
  },
};
</script>

<style scoped>
.hero-image {
  width: 15rem;
  height: 20rem;
  border-radius: 5px;
}

.tutor-image {
  border: 5px #dd3c4b solid;
  order: 2;
  margin-top: 10px;
  z-index: 4;
}

.tutor-image:hover {
  transform: rotate3d(180);
}

.consul-image {
  border: 5px yellow solid;
  margin-bottom: 40px;
}

.counsel-image {
  border: 5px #7eb68c solid;
}

.hero-image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

/* .hero-image-section:hover {
  margin: 2rem;
} */

.hero-text-section {
  margin: 10% 0;
  padding: 0 3%;
  text-align: left;
  backdrop-filter: blur(3px);
}

.hero-page {
  height: 85vh;
}

.dot {
  height: 700px;
  width: 700px;
  background-color: #bbb;
  border-radius: 50%;
  z-index: -1;
  overflow: hidden;
  overflow-x: hidden;
  display: flex;
}

/* .row {
  z-index: 10;
  position: relative;
} */

.hheader {
  font-family: "Merriweather", "Adamina", Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bolder;
  font-size: 2.4rem;
}

.font1 {
  font-family: "Sofia", Verdana, Geneva, Tahoma, sans-serif;
}

.hero-desc {
  font-family: "Lora", Verdana, Geneva, Tahoma, sans-serif;
}

@media screen and (max-width: 600px) {
}
</style>
