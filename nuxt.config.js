export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'spa',
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  // generate: {
  //   dir: 'build/dist'
  // },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM Sans:ital,wght@0,400;0,500;0,700;1,500&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;800&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css"
    },
    {
      rel: "stylesheet",
      href: "/bootstrap/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "/css/custom.css"
    },


    ],
    script: [
      {
        src: '/bootstrap/bootstrap.bundle.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js',
        type: 'text/javascript'
      },

      {
        src: '/js/custom.js',
        type: 'text/javascript'
      },

    ],
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/chart", ssr: false },
    { src: "~/plugins/hchs-vue-charts", ssr: false },
    { src: "~/plugins/vue-notifications.js", ssr: false },


  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  pwa: {
    meta: {
      title: "toefl",
      author: "me"
      /* meta options */
    }
    ,
    manifest: {
      name: 'Appskep Toefl',
      short_name: 'appskep',
      description: "ujian toefl",
      lang: 'en',
    },// disables the icon module,
    icon: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/pwa',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],

  toast: {

    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my_error',
        message: message => message,
        options: {
          type: 'error',
          theme: 'bubble',
          duration: 2000,
        }
      },

    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  loadingIndicator: {
    name: 'chasing-dots',
    color: '#00b4d8',
    background: 'white',

  },
  loading: {
    color: '#00b4d8'
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/api/auth/login',
            method: 'post',
            propertyName: 'data.token',
          },
          logout: true,
          user: {
            url: '/api/user/self',
            method: 'get',
            propertyName: 'data.user',
          },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true,
      },
    },
    redirect: {
      logout: '/login',
      home: '/dashboard',
      user: '/dashboard',
    },
  },
  build: {},
}
