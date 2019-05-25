<template lang="pug">
  section
    h1 {{ user.name }}
    hr
    b {{user.email}}
</template>

<script>
export default {
  async asyncData({params, error, $axios}) {
    try {
      const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      return {user}
    } catch (e) {
      error(e)
    }
  },
  validate({params}) {
    console.log(params)
    return /^\d+$/.test(params.id)
  }
}
</script>
