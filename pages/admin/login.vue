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
				this.$refs.form.validate(async valid => {
					if (valid) {
						this.loading = true;

						try {
							const formData = {
								login: this.controls.login,
								password: this.controls.password
							};

							await this.$store.dispatch('auth/login', formData);
							this.$router.push('/admin');
						} catch (e) {
							this.loading = false;
						}
					}
				});
			},
		},
		mounted() {
			const {message} = this.$route.query;

			switch (message) {
				case 'login':
					this.$message.info('Войдите в систему');
					break;
				case 'logout':
					this.$message.success('Вы успешно вышли из системы');
					break;
				case 'session':
					this.$message.warning('Время сессии истекло. Зайдите заново');
					break;
			}
		}
	}
</script>

<style scoped lang="scss">
	.login {
		width: 500px;
	}
</style>
