<template lang="pug">
  section
    h1 {{pegeTatle}}
    ul
      li(v-for="user of users", :key="user.id")
        a(href="#" @click.prevent="goTo(user)") User {{user.name}} ({{user.email}})
</template>

<script>
export default {
  async asyncData({store, error}) {
    try {
      const users = await store.dispatch('users/fetchUsers')
      return {users}
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      pegeTatle: 'User page'
    }
  },
  methods: {
    goTo(user) {
      this.$router.push(`/users/${user.id}`)
    }
  }
}
</script>

<style lang="scss">
  ul {
    text-align: left;

    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
