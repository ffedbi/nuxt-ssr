<template lang="pug">
  h1  {{ user.name }}
</template>

<script>
export default {
  asyncData({params, error}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve({
        //  user: {
        //    name: `Test user, id ${params.id}`
        //  }
        //})
        reject(error(new Error('user non found')))
      }, 1500)
    })
  },
  validate({params}) {
    console.log(params)
    return /^\d+$/.test(params.id)
  }
}
</script>
