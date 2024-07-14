<script setup lang="ts">
useSeoMeta({
  title: "Lifeline: Home of Solutions",
  ogTitle: "Lifeline: Home of Solutions",
  description:
    "A leading educational consultancy company in Ghana providing educational solutions to schools, parents and students.",
  ogDescription:
    "A leading educational consultancy company in Ghana providing educational solutions to schools, parents and students.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
useHead({
  script: [
    {
      src: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "bodyClose",
    },

    {
      src: "https://cdn.lordicon.com/lordicon.js",
      tagPosition: "head",
    },

    {
      src: "https://fonts.googleapis.com/icon?family=Material+Icons",
      tagPosition: "head",
    },

    {
      src: "https://www.google.com/recaptcha/api.js",
      async: true,
      defer: true,
      // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
      tagPosition: "head",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtPage />
    <!-- <NuxtWelcome /> -->
  </div>
</template>
