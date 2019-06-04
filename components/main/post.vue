<template lang="pug">
	el-card(shadow="hover" :body-style="{padding: 0}").post
		header(slot="header").post__header
			h3 {{ post.title }}
			small
				i.el-icon-time
				|  {{ new Date(post.date).toLocaleString() }}
		.post__body
			img(:src="post.imageUrl" alt="post image").post__img
		footer.post__footer
			el-button(round @click="openPost") Открыть пост
			span
				i.el-icon-message
				|  {{ post.comments.length }}
</template>

<script>
	export default {
		name: "post",
		props: {
			post: {
				type: Object,
				required: true
			}
		},
		methods: {
			openPost() {
				const id = this.post._id;
				this.$router.push(`/post/${id}`);
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
