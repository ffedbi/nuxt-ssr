<template lang="pug">
  form(@submit.prevent="")
    h1 Login
    .form-group
      label(for="login") Login
      input(type="text" id="login").form-control
    .form-group
      label(for="password") Password
      input(type="password" id="password").form-control
    p
      nuxt-link(to="/" tag="a") Home
    button.btn.btn-primary Login
</template>

<script>
export default {
  layout: 'empty'
}
</script>

<style scoped lang="scss">
  form {
    width: 600px;
  }
</style>
