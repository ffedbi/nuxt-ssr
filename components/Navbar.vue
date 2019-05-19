<template lang="pug">
  header
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
      a.navbar-brand(href='#') NuxtJS
      .collapse.navbar-collapse.show
        ul.navbar-nav.mr-auto
          li.nav-item.active
            nuxt-link(tag="a" to='/').nav-link Home
          li.nav-item
            nuxt-link(tag="a" to='/users').nav-link Users
          li.nav-item
            nuxt-link(tag="a" to='/about').nav-link About
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>

