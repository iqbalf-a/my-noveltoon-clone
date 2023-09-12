export default defineNuxtRouteMiddleware((to, from) => {
  const id = Array.isArray(to.params.id) ? to.params.id.join("") : to.params.id;
  const newId = parseInt(id);

  if (newId > 5) {
    return navigateTo("/detail/1");
  }

});
