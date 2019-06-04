<template lang="pug">
	article.post
		header.post__header
			.post__title
				h1 {{ post.title }}
				nuxt-link(tag="a" to="/")
					i.el-icon-back
			.post__info
				small
					i.el-icon-time
					| {{ new Date(post.date).toLocaleString() }}
				small
					i.el-icon-view
					| {{ post.views }}
			.post__img
				img(:src="post.imageUrl" :alt="post.title").post__img
		main.post__content
			vue-markdown {{ post.text }}
		footer
			comment-form(v-if="canAddComment" @created="createCommentHandler")
			.comments(v-if="post.comments.length")
				comment(v-for="(comment, index) in post.comments" :comment="comment" :key="index")
			.text-center(v-else) Комментариев нет
</template>

<script>
	import Comment from "../../components/main/comment";
	import CommentForm from "../../components/main/comment-form";

	export default {
		components: {CommentForm, Comment},
		async asyncData({store, params}) {
			const post = await store.dispatch('post/fetchById', params.id);
			await store.dispatch('post/addView', post);
			return {
				post: {...post, views: ++post.views}
			}
		},
		validate({params}) {
			return !!params.id;
		},
		data() {
			return {
				canAddComment: true
			}
		},
		methods: {
			createCommentHandler() {
				this.canAddComment = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	.post {
		max-width: 600px;
		margin: 0 auto;

		&__header {
			margin-bottom: 1.5rem;
		}

		&__title {
			display: flex;
			justify-content: space-between;
			align-items: center;

			margin-bottom: 1rem;
		}

		&__info {
			display: flex;
			justify-content: space-between;
			align-items: center;

			margin-bottom: 0.5rem;
		}

		&__img {
			width: 100%;
			height: auto;
		}

		&__content {
			margin-bottom: 2rem;
		}
	}
</style>
