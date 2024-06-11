<template>
  <section class="">
    <div id="testimonialCarousel" class="carousel slide">
      <div class="carousel-inner banner">
        <div class="carousel-item active">
          <div class="card">
            <Panel>
              <template #header>
                <div class="flex align-items-center gap-2">
                  <Avatar
                    class=""
                    image="/images/Pic.png"
                    size="small"
                    shape="circle"
                  />
                  <span class="p-text-secondary">Mr. Sulemana</span>
                </div>
              </template>
              <template #footer>
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-3"
                >
                  <span class="p-text-secondary">--Lifeline--</span>
                </div>
              </template>
              <template #icons>
                <Menu ref="menu" id="config_menu" :model="items" popup />
              </template>
              <p class="m-0 parent-quote">
                "My son is currently preparing for the B.E.C.E. Lifeline
                provided two tutors for different subjects and their prices are
                affordable. I highly recommend them to you too."
              </p>
            </Panel>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <Panel>
              <template #header>
                <div class="flex align-items-center gap-2">
                  <Avatar image="/images/Pic.png" size="large" shape="circle" />
                  <span class="p-text-secondary">Madam Beatrice</span>
                </div>
              </template>
              <template #footer>
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-3"
                >
                  <span class="p-text-secondary">--Lifeline--</span>
                </div>
              </template>
              <template #icons>
                <Menu ref="menu" id="config_menu" :model="items" popup />
              </template>
              <p class="m-0 parent-quote">
                "My daughters are being taught by two tutors from Lifeline. I
                appreciate their professionalism and dedication. My daughters
                enjoy their teaching and have improved greatly."
              </p>
            </Panel>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card">
            <Panel>
              <template #header>
                <div class="flex align-items-center gap-2">
                  <Avatar image="/images/Pic.png" size="large" shape="circle" />
                  <span class="p-text-secondary">Alhaji Ahmed Adam</span>
                </div>
              </template>
              <template #footer>
                <div
                  class="flex flex-wrap align-items-center justify-content-between gap-3"
                >
                  <span class="p-text-secondary">--Lifeline--</span>
                </div>
              </template>
              <template #icons>
                <Menu ref="menu" id="config_menu" :model="items" popup />
              </template>
              <p class="m-0 parent-quote">
                Lifeline is teaching reading to my children. The tutor assigned
                to me doing a good job and I find their service to be
                affordable. I commend Lifeline for the good job they are doing.
              </p>
            </Panel>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <i
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="prev"
          class="bi-caret-left-square text-danger fs-1 me-3"
        ></i>

        <i
          type="button"
          data-bs-target="#testimonialCarousel"
          data-bs-slide="next"
          class="bi-caret-right-square text-danger fs-1"
        ></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial Component",
  data() {
    return {
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Search",
          icon: "pi pi-search",
        },
        {
          separator: true,
        },
        {
          label: "Delete",
          icon: "pi pi-times",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-inner.banner {
  position: relative;
  height: 500px; /* Adjust the height as needed */
}

.carousel-item {
  height: 100%;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%; /* Adjust the width as needed */
  max-width: 800px; /* Set a maximum width for the card */
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Adjust the background color and opacity */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.parent-quote {
  font-size: 20px;
  line-height: 1.5;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .parent-quote {
    font-size: 12px;
    line-height: 1.5;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}
</style>
