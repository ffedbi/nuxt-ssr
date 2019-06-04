<template lang="pug">
	section
		h1 Аналитика по постам
		analytics-chart(:labels="views.labels" :data="views.data" title="Просмотры")
		analytics-chart(:labels="comments.labels" :data="comments.data" title="Количество комментариев")
</template>

<script>
	import AnalyticsChart from "../../components/admin/analytics-chart";
	export default {
		name: "index",
		components: {AnalyticsChart},
		layout: 'admin',
		middleware: ['admin-auth'],
		head: {
			title: `Аналитика | ${process.env.appName}`
		},
		async asyncData({store}) {
			const {views, comments} = await store.dispatch('post/getAnalytics');
			return {views, comments}
		}
	}
</script>

<style scoped lang="scss">

</style>
