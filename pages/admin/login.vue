<template lang="pug">
	el-card(shadow="always").login
		el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
			h2.text-center Войти в панель администратора
			el-form-item(label='Логин' prop="login")
				el-input(v-model.trim='controls.login')
			.mb2
				el-form-item(label="Пароль" prop="password")
					el-input(type="password" v-model='controls.password' prop="password")
			el-form-item
				el-button(type='primary', native-type="submit" round :loading="loading") Войти
</template>

<script>
	export default {
		name: "login",
		layout: 'empty',
		data() {
			return {
				loading: false,
				controls: {
					login: '',
					password: '',
				},
				rules: {
					login: [
						{required: true, message: 'Введите логин', trigger: 'blur'},
					],
					password: [
						{required: true, message: 'Введите пароль', trigger: 'blur'},
						{min: 6, message: 'Пароль должен быть не меньше 6 символов', trigger: 'blur'},
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
	.login {
		width: 500px;
	}
</style>
