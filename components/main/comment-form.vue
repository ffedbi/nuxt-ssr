<template lang="pug">
	el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
		h2 Добавить комментарий
		el-form-item(label='Ваше имя' prop="name")
			el-input(v-model='controls.name')
		el-form-item(label="Комментарий" prop="text")
			el-input(type="textarea" resize="none" :rows="2" v-model='controls.text' prop="text")
		el-form-item
			el-button(type='primary', native-type="submit" round :loading="loading") Добавить комментарий
</template>

<script>
	export default {
		props: {
			postId: {
				type: String,
				required: true
			}
		},
		name: "comment-form",
		data() {
			return {
				loading: false,
				controls: {
					name: '',
					text: '',
				},
				rules: {
					name: [
						{required: true, message: 'Имя не должно быть пустым', trigger: 'blur'},
					],
					text: [
						{required: true, message: 'Введите комментарий', trigger: 'blur'},
					]
				}
			}
		},
		methods: {
			onSubmit() {
				this.$refs.form.validate(async (valid) => {
					if (valid) {
						this.loading = true;

						const formData = {
							postId: this.postId,
							name: this.controls.name,
							text: this.controls.text
						};

						try {
							const newComment = await this.$store.dispatch('comment/create', formData);
							this.$emit('created', newComment);
							this.$message.success('Комментарий добавлен');

						} catch (e) {
							this.loading = false;
						}
					}
				});
			},
		}
	}
</script>

<style scoped lang="scss">

</style>
