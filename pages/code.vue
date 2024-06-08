<template>
  <section>
    <div class="client-banner">
      <NavBar></NavBar>
    </div>
    <div class="container-sm services mb-3">
      <h4 class="py-3">TUTOR CODE OF CONDUCT</h4>
      <object
        data="/pdf/Code.pdf"
        type="application/pdf"
        class="pdf"
      ></object>
    </div>
  </section>
  <ContactUs></ContactUs>
  <Footer></Footer>
</template>

<script>
definePageMeta({
  middleware: "auth",
});
import pdf from "/pdf/Code.pdf";
export default {
  name: "Code of Conduct",
  middleware: "auth",
};
</script>

<style scoped></style>
