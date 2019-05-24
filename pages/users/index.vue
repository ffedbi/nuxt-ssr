<template lang="pug">
  section
    h1 {{pegeTatle}}
    ul
      li(v-for="user of users", :key="user")
        a(href="#" @click.prevent="goTo(user)") User {{user}}
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          users:  [1, 2, 3, 4, 5]
        })
      }, 3000)
    })
  },
  data() {
    return {
      pegeTatle: 'User page'
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
