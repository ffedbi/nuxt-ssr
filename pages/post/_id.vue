<template lang="pug">
	article.post
		header.post__header
			.post__title
				h1 Title
				nuxt-link(tag="a" to="/")
					i.el-icon-back
			.post__info
				small
					i.el-icon-time
						| {{ new Date().toLocaleString() }}
				small
					i.el-icon-view
						| 42
			.post__img
				img(:src="`http://picsum.photos/750/400?r=${Math.random()}`" alt="post image").post__img
		main.post__content
			p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem eius est mollitia officiis pariatur soluta? Ducimus error et hic impedit officiis perspiciatis quia repudiandae!
			p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem eius est mollitia officiis pariatur soluta? Ducimus error et hic impedit officiis perspiciatis quia repudiandae!
			p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem eius est mollitia officiis pariatur soluta? Ducimus error et hic impedit officiis perspiciatis quia repudiandae!
		footer
			comment-form
			.comments(v-if="false")
				comment(v-for="(comment, index) in 4" :comment="comment" :key="index")
			.text-center(v-else) Комментариев нет
</template>

<script>
	import Comment from "../../components/main/comment";
	import CommentForm from "../../components/main/comment-form";

	export default {
		components: {CommentForm, Comment},
		validate({params}) {
			console.log(params.id);
			return !!params.id;
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
