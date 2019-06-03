<template lang="pug">
	el-form(:model='controls', :rules='rules', ref='form' @submit.native.prevent="onSubmit")
		h2.text-center Создать пользователя
		el-form-item(label='Логин' prop="login")
			el-input(v-model.trim='controls.login')
		.mb2
			el-form-item(label="Пароль" prop="password")
				el-input(type="password" v-model='controls.password' prop="password")
		el-form-item
			el-button(type='primary', native-type="submit" round :loading="loading") Создать
</template>


<script>
	export default {
		name: "user",
		layout: 'admin',
		middleware: ['admin-auth'],
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

							await this.$store.dispatch('auth/createUser', formData);
							this.$message.success('Пользователь создан');
							this.controls.login = '';
							this.controls.password = '';
							this.loading = false;
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
	form {
		width: 400px;
	}
</style>
