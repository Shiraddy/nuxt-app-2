export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Sofia",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Adamina",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Ubuntu|Lora",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css",
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:wght@200;300&family=Merriweather:wght@400;900&family=Montserrat:wght@800&family=Noto+Serif:wght@600&family=Open+Sans&family=PT+Sans&display=swap",
        },
      ],
    },
  },

  devtools: { enabled: true, vscode: {} },

  modules: ["nuxt-primevue"],

  // plugins: ["@/plugins/firebase"],

  primevue: {
    /* Options */
  },

  // components: [
  //   { path: "~/node_modules/primevue/components/", prefix: "Prime" },
  // ],
  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "~/assets/css/main.css",
  ],
});
