<template>
  <div class="container-fluid my-5">
    <div class="row my-3">
      <div class="col-lg-6 col-12 shadow-two d-none d-lg-block">
        <div class="text-body-secondary story">
          <hr />
          <!-- <img src="/images/logo.png" alt="" class="logo" /> -->
          <h1 class="fw-bolder mb-0 fs-1">LIFELINE</h1>
          <p class="text-dark-emphasis">Think Solutions; think Lifeline!</p>
          <hr />
        </div>
        <!-- <img src="/images/us.jpg" alt="" width="500" /> -->
      </div>

      <div class="col-lg-6 col-12 shadow-two bg-white">
        <h3 class="text-body-secondary pt-3">About Us</h3>
        <div
          id="about-lifeline"
          class="carousel slide py-lg-5 py-1 px-lg-3 px-2"
          data-bs-ride="true"
        >
          <div class="carousel-inner">
            <div class="px-lg-3 about-desc">
              <div
                class="carousel-item active caro-item-about"
                data-bs-interval="10000"
              >
                <p class="first">
                  We are an educational hub in the heart of Tamale, Northern
                  Region, Ghana. Incorporated in 2019, we provide a wide range
                  of educational solutions.
                </p>

                <p>
                  We specialize in providing tailored solutions to the myriad
                  educational challenges encountered by schools, parents, and
                  students.
                </p>
              </div>

              <div class="carousel-item caro-item-about">
                <p>
                  Our solutions include private tuition, educational guidance
                  and counselling, and educational consultancy.
                </p>

                <p>
                  We use collaborative approaches ~ working hand in hand with
                  various educational experts to deliver unparalleled quality
                  services.
                </p>
              </div>

              <div class="carousel-item caro-item-about">
                <p>
                  Our motto, "Think Solutions; think Lifeline," encapsulates our
                  commitment to being the definitive answer to educational
                  needs.
                </p>

                <p>
                  We are more than just a solution; we are the epitome of
                  excellence in education.
                </p>
              </div>

              <div class="carousel-item caro-item-about">
                <p>
                  Lifeline Educational Solutions Limited is your trusted ally in
                  fostering teaching excellence and overcoming educational
                  hurdles.
                </p>

                <p>
                  We're dedicated to being the go-to solution for all your
                  educational needs.
                </p>
              </div>

              <div class="carousel-item caro-item-about">
                <p>
                  Discover the Lifeline advantage – where innovative solutions
                  meet educational excellence! 🚀 <br />
                  <a class="text-center" href="/about">Read More</a>
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <i
              type="button"
              data-bs-target="#about-lifeline"
              data-bs-slide="prev"
              class="bi-caret-left-square text-danger fs-1 me-3"
            ></i>

            <i
              type="button"
              data-bs-target="#about-lifeline"
              data-bs-slide="next"
              class="bi-caret-right-square text-danger fs-1"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-desc {
  line-height: 1.7;
  font-size: 1.3rem;
  padding: 10px 0;
  text-align: justify;
}
.first::first-letter {
  font-size: 2rem;
  /* color: black; */
  font-weight: bolder;
  padding: 1rem 0;
  /* font-style: oblique; */
}

@media only screen and (max-width: 600px) {
  .about-desc {
    font-size: 0.99rem;
  }

  .about-desc {
    /* line-height: 1.7; */
    font-size: 1.2rem;
    padding: 0.7rem 0;
    text-align: start;
  }
}
</style>
