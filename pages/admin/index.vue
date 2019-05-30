<template lang="pug">
	h1 Welcome to admin page
</template>

<script>
	export default {
		name: "index",
		layout: 'admin',
		middleware: ['admin-auth']
	}
</script>

<style scoped>

</style>
