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
    <div class="faqBody">
      <Accordion :multiple="true" :activeIndex="[0]">
        <AccordionTab header="1. How can I become a Lifeline Tutor?">
          <p class="m-0">
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
        </AccordionTab>
        <AccordionTab header="2. After applying, what is next?">
          <p class="m-0">
            Lifeline takes the application process very seriously, not all who
            apply are called for an interview. Where you are called, you will be
            required to provide evidence of qualification and expertise.
          </p>
        </AccordionTab>
        <AccordionTab header="3. How and when is the interview?">
          <p class="m-0">
            The interview will be conducted in not more than two weeks after the
            date of closure of applications. Successful applicants will be
            invited for an interview -- this will be in-person or online.
          </p>
        </AccordionTab>
        <AccordionTab header="4. How do I get paid?">
          <p class="m-0">
            Payment is sent to you through Mobile Money after successful
            completion of a tutorial assignment.
          </p>
        </AccordionTab>
        <AccordionTab header="5. When does Lifeline Pay its Tutors?">
          <p class="m-0">
            Payment is made not later than the 5th of the preceding month. This
            is after the tutor has submitted his/her Log Sheet and has been
            cleared for such.
          </p>
        </AccordionTab>
        <AccordionTab
          header="6. Can I be assigned to several tuition assignments?"
        >
          <p class="m-0">
            Yes! Tutors who have a proven track record of excellence and
            discipline are given several tuition assignments.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
    <!-- ACCORDIAN -->
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
