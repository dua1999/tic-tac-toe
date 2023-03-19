// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
    ],
typescript: {
    shim: false,
},
css: ['~/assets/css/main.css'],

postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
        title: 'My Portfolio',
        meta: [
          // 
          { name: 'description', content: 'My project' }
        ],
    },
    
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition:  { name: 'page', mode: 'out-in' },
  },
})

