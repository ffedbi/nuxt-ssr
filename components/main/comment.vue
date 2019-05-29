<template lang="pug">
	el-card.comment
		.comment__header
			h6 Person name
			span
				i.el-icon-time
				| {{ new Date().toLocaleString() }}
		.comment__text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam et fugit quod. Cupiditate doloremque, ipsam!
</template>

<script>
	export default {
		name: "comment",
		props: ['comment']
	}
</script>

<style scoped lang="scss">
	.comment {
		margin-bottom: 1rem;

		&__header {
			display: flex;
			justify-content: space-between;

			margin-bottom: 0.5rem;

			font-size: 0.8rem;
		}

		&__text {
			white-space: pre-line;
		}
	}
</style>
