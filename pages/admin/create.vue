<template lang="pug">
	el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
		h2.mb Создать пост
		el-form-item(label='Название поста' prop="title")
			el-input(v-model.trim='controls.title')
		el-form-item(label='Текст в формате md. или .html' prop="text")
			el-input(type="textarea" :rows="10" resize="none" v-model.trim='controls.text')
		el-form-item
			el-button(type='primary', native-type="submit" round :loading="loading") Создать
</template>

<script>
	export default {
		name: "create",
		layout: 'admin',
		middleware: ['admin-auth'],
		data() {
			return {
				loading: false,
				controls: {
					title: '',
					text: '',
				},
				rules: {
					title: [
						{required: true, message: 'Название поста не может быть пустым!', trigger: 'blur'},
					],
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
								title: this.controls.title,
								text: this.controls.text,
							};

							await this.$store.dispatch('post/create', formData);
							this.$message.success('Пост создан!');
							this.controls.title = '';
							this.controls.text = '';
						} catch (e) {

						} finally {
							this.loading = false;
						}
					}
				});
			},
		},
	}
</script>

<style scoped lang="scss">
	form {
		width: 500px;
	}
</style>
