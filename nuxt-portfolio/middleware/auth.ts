export default defineNuxtRouteMiddleware((to, from) => {
   if (to.params.slug !== "true")
   navigateTo('/pages/welcome')
  })