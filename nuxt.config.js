export default {
  components: true,
  target: 'static',
  head: {
    title: "Nuxt Image Example",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      }
    ]
  },
  modules: ["@nuxt/image"],
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dtzsbdaxt/image/upload/"
    }
  }
};
