<template lang="pug">
	section.error
		.error__content
			h1.error__title Ошибка 404
			nuxt-link(to="/" ) Вернуться на главную
</template>

<script>
	export default {
		name: "error.vue"
	}
</script>

<style scoped lang="scss">
	.error {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;

		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;

			padding-top: 4rem;
		}

		&__title {
			margin-bottom: 1rem;

			color: rgb(145, 6, 6);
		}
	}
</style>
