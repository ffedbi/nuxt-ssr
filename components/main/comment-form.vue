<template lang="pug">
	el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
		h2 Добавить комментарий
		el-form-item(label='Ваше имя' prop="name")
			el-input(v-model.trim='controls.name')
		el-form-item(label="Комментарий" prop="text")
			el-input(type="textarea" resize="none" :rows="2" v-model.trim='controls.text' prop="text")
		el-form-item
			el-button(type='primary', native-type="submit" round :loading="loading") Добавить комментарий
</template>

<script>
	export default {
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
				console.log('submit');
				this.$refs.form.validate((valid) => {
					if (valid) {
						this.loading = true;

						const formData = {
							postId: '',
							name: this.controls.name,
							text: this.controls.text
						};

						try {
							setTimeout(() => {
								this.$emit('created');
								this.$message.success('Комментарий добавлен')
							}, 2000)
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
