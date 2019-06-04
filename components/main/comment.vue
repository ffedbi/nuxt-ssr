<template lang="pug">
	el-card.comment
		.comment__header
			h6 {{ comment.name }}
			span
				i.el-icon-time
				| {{ comment.date | date }}
		.comment__text {{ comment.text }}
</template>

<script>
	export default {
		name: "comment",
		props: {
			comment: {
				type: Object,
				required: true
			}
		}
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
