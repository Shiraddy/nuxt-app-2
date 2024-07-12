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
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
          // "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        },
        {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
          // href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/fontawesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:wght@200;300&family=Merriweather:wght@400;900&family=Montserrat:wght@800&family=Noto+Serif:wght@600&family=Open+Sans&family=PT+Sans&display=swap",
        },

        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/primeicons@7.0.0/primeicons.min.css",
        },

        {
          rel: "stylesheet",
          href: "https://cdn.lordicon.com/lordicon.js",
        },
      ],
    },
  },

  routeRules: {
    "/admin/**": { ssr: false },
    "/personal/**": { ssr: false },
  },

  experimental: {
    restoreState: true,
    watcher: "chokidar",
  },

  modules: [
    "nuxt-primevue",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_MAIL_TARGET,
          cc: process.env.NUXT_MAIL_CC,
        },
        smtp: {
          host: process.env.NUXT_MAIL_SMPT,
          port: process.env.NUXT_MAIL_PORT,
          secure: true,
          auth: {
            user: process.env.NUXT_MAIL_USERNAME,
            pass: process.env.NUXT_MAIL_PASSWORD,
          },
          // port: 587,
        },
      },
    ],
    "@nuxt/image",
  ],

  primevue: {
    components: {
      exclude: [],
    },
  },

  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "~/assets/css/main.css",
  ],
});