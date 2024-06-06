<template>
  <div class="client-banner mb-5">
    <NavBar></NavBar>
  </div>
  <div class="container-sm services py-5">
    <Gallery></Gallery>
  </div>
  <h4>This page is under development</h4>
</template>

<script>
import Gallery from "@/components/Gallery.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Gallery View",
  components: {
    Gallery,
    NavBar,
  },
};
</script>

<style scoped></style>
