<template lang="pug">
	el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
		h2.mb Создать пост
		el-form-item(label='Название поста' prop="title")
			el-input(v-model.trim='controls.title')
		el-form-item(label='Текст в формате md. или .html' prop="text")
			el-input(type="textarea" :rows="10" resize="none" v-model='controls.text')
		el-button(type="success" plain @click="previewDialog = true").mb Предпросмотр
		el-dialog(title='Предпросмотр' :visible.sync='previewDialog')
			div(:key="controls.text")
				vue-markdown {{ controls.text }}
		el-upload.mb2(drag :auto-upload="false" action='https://jsonplaceholder.typicode.com/posts/' :on-change="handleImageChange" ref="upload")
			i.el-icon-upload
			.el-upload__text  Перетащите картинку
				em &nbsp;или кликните
			.el-upload__tip(slot='tip') файлы в формате jpg/png
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
				previewDialog: false,
				image: null,
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
			handleImageChange(file, fileList) {
				console.log(file.raw);
				this.image = file.raw;
			},
			onSubmit() {
				this.$refs.form.validate(async valid => {
					if (valid && this.image) {
						this.loading = true;

						try {
							const formData = {
								title: this.controls.title,
								text: this.controls.text,
								image: this.image
							};

							await this.$store.dispatch('post/create', formData);
							this.controls.title = '';
							this.controls.text = '';
							this.image = null;
							this.$refs.upload.clearFiles();
							this.$message.success('Пост создан!');
						} catch (e) {
						} finally {
							this.loading = false;
						}
					} else {
						this.$message.warning('Форма не валидна')
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
