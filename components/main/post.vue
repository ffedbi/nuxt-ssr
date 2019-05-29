<template lang="pug">
	el-card(shadow="hover" :body-style="{padding: 0}").post
		header(slot="header").post__header
			h3 Post title
			small
				i.el-icon-time
				|  {{ new Date().toLocaleString() }}
		.post__body
			img(:src="`http://picsum.photos/750/400?r=${Math.random()}`" alt="post image").post__img
		footer.post__footer
			el-button(round @click="openPost") Открыть пост
			span
				i.el-icon-message
				|  13
</template>

<script>
	export default {
		name: "post",
		methods: {
			openPost() {
				this.$router.push(`/post/${this.post.id}`)
			}
		}
	}
</script>

<style scoped lang="scss">
	.post {
		margin-bottom: 1.5rem;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__body {}

		&__img {
			width: 100%;
			height: auto;
		}

		&__footer {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			padding: 1rem;
		}
	}
</style>
