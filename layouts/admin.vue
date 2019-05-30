<template lang="pug">
	.admin
		el-container
			el-aside(width="250px")
				app-aside
			el-main
				nuxt
</template>

<script>
	import AppAside from "../pages/admin/app-aside";
	export default {
		name: "admin",
		components: {AppAside}
	}
</script>

<style scoped lang="scss">
	.admin {
		width: 100%;
		height: 100vh;

		.el-container {
			height: 100%;
		}
	}
</style>
