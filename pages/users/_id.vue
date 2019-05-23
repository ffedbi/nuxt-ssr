<template lang="pug">
  h1 User with id {{ $route.params.id }}
</template>

<script>
export default {
  validate({params}) {
    console.log(params)
    return /^\d+$/.test(params.id)
  }
}
</script>
