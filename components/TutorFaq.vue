<template>
  <!-- TUTOR FAQ -->

  <!-- GREETING MESSAGE -->
  <div>
    <h5>A MESSAGE TO ASPIRING TUTOR</h5>
    <div class="letter">
      <p>
        Dear Aspiring Tutor, <br />
        Lifeline is pleased to have you read this area and receive satisfying
        answers to your questions or queries. You will join us in delivering
        quality tuition to our students far and near. You will become a part of
        the solution, and help others become their very best.
      </p>
      <p>
        Please take your time to read our code of conduct for tutors.
        <RouterLink class="link" to="/code">Click to read</RouterLink>
      </p>
      <p>
        Yours truly, <br />
        Lifeline
      </p>
    </div>

    <h4>Frequently Asked Questions</h4>

    <!-- ACCORDIAN -->
    <div class="accordion faqBody" id="accordionExample">
      <!-- FIRST FAQ TUTOR -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button bg-danger text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <h5 class="faqHead">1. How can I become a Lifeline Tutor?</h5>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              You can fill out our
              <a href="/apply">Application Form</a> , or
              <a href="tel:+233246011004">call us</a>
              any of our contacts and we will assist you through the process.
              Please note that applications from only the following will be
              considered:
            </p>
            <ol>
              <li>Professional Teachers (Private and Government)</li>
              <li>College Undergraduates/Graduates</li>
              <li>University Undergraduates/Graduates</li>
              <li>Technical Institute Undergraduates/Graduates</li>
              <li>Working Professionals</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- SECOND FAQ TUTOR -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-danger text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <h5 class="faqHead">2. After applying, what is next?</h5>
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Lifeline takes the application process very seriously, not all who
              apply are called for an interview. Where you are called, you will
              be required to provide evidence of qualification and expertise.
            </p>
          </div>
        </div>
      </div>
      <!-- THIRD FAQ TUTOR -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-danger text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h5 class="faqHead">3. How and when is the interview?</h5>
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              The interview will be conducted in not more than two weeks after
              the date of closure of applications. Successful applicants will be
              invited for an interview -- this will be in-person or online.
            </p>
          </div>
        </div>
      </div>
      <!-- FOURTH FAQ TUTOR -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-danger text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            <h5 class="faqHead">4. How do I get paid?</h5>
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Payment is sent to you through Mobile Money after successful
              completion of a tutorial assignment.
            </p>
          </div>
        </div>
      </div>
      <!-- FIFTH FAQ TUTOR -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-danger text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            <h5 class="faqHead">5. When does Lifeline Pay its Tutors?</h5>
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Payment is made not later than the 5th of the preceding month.
              This is after the tutor has submitted his/her Log Sheet and has
              been cleared for such.
            </p>
          </div>
        </div>
      </div>
      <!-- SIXTH FAQ TUTOR -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed bg-danger text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseS#collapseSix"
          >
            <h5 class="faqHead">
              6. Can I be assigned to several tuition assignments?
            </h5>
          </button>
        </h2>
        <div
          id="collapseS#collapseSix"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Yes! Tutors who have a proven track record of excellence and
              discipline are given several tuition assignments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "Tutor Faq",
  components: {
    NavBar,
  },
};
</script>

<style scoped></style>
