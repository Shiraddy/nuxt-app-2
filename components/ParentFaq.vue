<template>
  <!-- PARENTS FAQ -->
  <div id="parentFaq">
    <h5>A MESSAGE TO OUR PARENT</h5>
    <div class="letter">
      <p>
        Dear Parent/Guardian, <br />
        Lifeline is pleased to have you read this area and receive satisfying
        answers to your questions. It is us hope that your trust in us will lead
        you to making the right decision about who teaches your child and what
        results you hope to achieve.
      </p>

      <p>
        To ensure we give you excellent service, we have a code of conduct for
        our tutors.
        <a class="nav-link text-primary" href="/code">Click to read</a>
      </p>

      <p>
        Yours truly, <br />
        Lifeline
      </p>
    </div>

    <h4>Frequently Asked Questions</h4>
    <div class="faqBody">
      <Accordion :multiple="true" :activeIndex="[0]">
        <AccordionTab header="1. How can I get a tutor for my ward?">
          <p class="m-0 text-start">
            You can fill out the
            <a href="/tuition">Tutor-Request-Form</a> , or
            <a href="tel:+233246011004">call us</a>
            any of our contacts and we will assist you through the process.
          </p>
        </AccordionTab>
        <AccordionTab
          header="2. How long do I have to wait after placing a request?"
        >
          <p class="m-0 text-start">
            It depends on the type of tuition you want, level of your child and
            other equally important considerations. This can take from the date
            of application to two-weeks. Within this time, we will do all we can
            to get you a suitable tutor.
          </p>
        </AccordionTab>
        <AccordionTab header="3. What is the duration for each lesson?">
          <p class="m-0 text-start">
            Lesson duration is relative - you get to choose the duration of your
            lessons. Remember that the duration of lessons is one of several
            factors that affect charges.
          </p>
        </AccordionTab>
        <AccordionTab header="4. How much do I pay for the service?">
          <p class="m-0 text-start">
            Fees depend on the type of tuition (In-Person or Online), tuition
            sessions per week, and lesson duration.
          </p>
        </AccordionTab>

        <AccordionTab header="5. How do I make payment?">
          <p class="m-0 text-start">
            Payment is to be made to our MTN Mobile Money Number (0555697623) or
            our Mobile Money Short Code (710112) with your reg-code (you will be
            given one) as reference.
          </p>
        </AccordionTab>
        <AccordionTab
          header="6. I am in a very remote area, can you still get me a tutor?"
        >
          <p class="m-0 text-start">
            Our in-person option is designed to get you a tutor wherever you
            are. However, where we are unable to do so after our best effort, we
            can use our online service to still deliver effective lessons
            wherever may you may be.
          </p>
        </AccordionTab>
        <AccordionTab header="7. When to make payment?">
          <p class="m-0 text-start">
            Payment is to be made upon receipt of a tutor and before the start
            of the tuition process.
          </p>
        </AccordionTab>
        <AccordionTab header="8. Can I cancel a request?">
          <p class="m-0 text-start">Yes, you are free to cancel a request.</p>
        </AccordionTab>
        <AccordionTab
          header="9. Will I get a refund if I cancel a contract after payment?"
        >
          <p class="m-0 text-start">
            Yes! you will get 100% of your money back if you cancel a contract
            before tuition starts. However, where a contract is cancelled after
            a number of tuition engagements, you will be charged for the lessons
            delivered, and the remainder of your money will be refunded.
          </p>
        </AccordionTab>
        <AccordionTab
          header="10. Will I pay same amount if the I have two or more students?"
        >
          <p class="m-0 text-start">
            Yes! Lifeline offers you a discount when you enrol two or more
            children. The discount option is activated as of the time of
            requesting a tutor. It must be noted that lesson duration, frequency
            of lessons, and number of children affect the discount.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parent Faq",
};
</script>

<style scoped></style>
