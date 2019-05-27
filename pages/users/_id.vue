<template lang="pug">
  section
    h1 {{ user.name }}
    hr
    b {{user.email}}
</template>

<script>
export default {
  async asyncData({ params, error, store }) {
    try {
      const user = await store.dispatch("users/fetchUserById", params.id);
      return { user };
    } catch (e) {
      error(e);
    }
  },
  validate({ params }) {
    console.log(params);
    return /^\d+$/.test(params.id);
  }
};
</script>
