<template lang="pug">
	.admin
		el-container
			el-aside(width="250px")
				app-aside
			el-main
				nuxt
</template>

<script>
	import AppAside from "../components/admin/app-aside";
	export default {
		name: "admin",
		components: {AppAside},
		computed: {
			error() {
				return this.$store.getters.error;
			}
		},
		watch: {
			error(value) {
				this.$message.error(value.response.data.message)
			}
		}
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
