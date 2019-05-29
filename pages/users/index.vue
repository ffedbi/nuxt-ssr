<template lang="pug">
  section
    h1 {{pageTitle}}
    ul
      li(v-for="user of users", :key="user.id")
        a(href="#" @click.prevent="goTo(user)") User {{user.name}} ({{user.email}})
</template>

<script>
export default {
  // async fetch({ store, error }) {
  //   try {
  //     if (store.getters["users/users"].length === 0) {
  //       await store.dispatch("users/fetchUsers");
  //     }
  //   } catch (e) {
  //     error(e);
  //   }
  // },
  data() {
    return {
      pageTitle: "Users page"
    };
  },
  methods: {
    goTo(user) {
      this.$router.push(`/users/${user.id}`);
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  }
};
</script>

<style lang="scss">
ul {
  text-align: left;

  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
