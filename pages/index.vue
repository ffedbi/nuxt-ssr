<template lang="pug">
	el-row(type="flex" justify="center")
		el-col(:xs="24" :sm="18" :md="12" :lg="10")
			post(v-for="(post, index) in 3" :key="index")
</template>

<script>
	import Post from "../components/main/post";
	export default {
		head: {
			title: 'Home'
		},
		components: {Post}
	}
</script>

<style lang="scss">

</style>
