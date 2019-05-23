<template lang="pug">
  section
    h1 User page
    ul
      li(v-for="user of users", :key="user")
        a(href="#" @click.prevent="goTo(user)") User {{user}}
</template>

<script>
export default {
  data() {
    return {
      users: [
        1, 2, 3, 4, 5
      ]
    }
  },
  methods: {
    goTo(user) {
      this.$router.push(`/users/${user}`)
    }
  }
}
</script>

<style lang="scss">

</style>
