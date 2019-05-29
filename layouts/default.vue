<template lang="pug">
	el-container
		el-header
			app-navigations
		el-main
			nuxt
		el-footer
</template>

<script>
	import AppNavigations from "../components/main/app-navigations";

	export default {
		components: {AppNavigations}
	}
</script>

<style>

</style>
