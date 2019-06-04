<template lang="pug">
	.post
		el-breadcrumb(separator='/').mb
			el-breadcrumb-item(to="/admin/list") Посты
			el-breadcrumb-item {{ post.title }}

		el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
			/// h2.text-center Войти в панель администратора
			el-form-item(label='Текст в формате md. или .html' prop="text")
				el-input(type="textarea" :rows="10" resize="none" v-model.trim='controls.text')
			.mb
				small.mr
					i.el-icon-time
					span {{ post.date | date }}
				small
					i.el-icon-view
					span {{ post.views }}
			el-form-item
				el-button(type='primary', native-type="submit" round :loading="loading") Обновить
</template>

<script>
	export default {
		name: "_id",
		layout: 'admin',
		middleware: ['admin-auth'],
		head() {
			return {
				title: `${this.post.title} | ${process.env.appName}`
			}
		},
		validate({params}) {
			return !!params.id;
		},
		async asyncData({store, params}) {
			const post = await store.dispatch('post/fetchAdminById', params.id);
			return {post}
		},
		data() {
			return {
				loading: false,
				controls: {
					text: '',
				},
				rules: {
					text: [
						{required: true, message: 'Поле текста не должно быть пустым!', trigger: 'blur'},
					],
				}
			}
		},
		methods: {
			onSubmit() {
				this.$refs.form.validate(async valid => {
					if (valid) {
						this.loading = true;

						try {
							const formData = {
								id: this.post._id,
								text: this.controls.text,
							};

							await this.$store.dispatch('post/update', formData);
							this.$message.success('Пост обновлён!')
							this.loading = false;
						} catch (e) {
							this.loading = false;
						}
					}
				});
			},
		},
		mounted() {
			this.controls.text = this.post.text;
		}
	}
</script>

<style scoped lang="scss">
	.post {
		width: 500px;

		.mr {
			margin-right: 1rem;
		}
	}
</style>
