<template lang="pug">
	div
		el-form(:model='controls', :rules='rules', ref='form')
			el-form-item(label='Ваше имя', prop='name')
				el-input(v-model.trim='controls.name')
			el-form-item(label="Комментарий" prop="text")
				el-input(type="textarea" resize="none" :rows="2" v-model.trim='controls.text')
			el-form-item
				el-button(type='primary', @click="submitForm('ruleForm')") Create
</template>

<script>
	export default {
		name: "comment-form",
		data() {
			return {
				name: '',
				text: '',
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
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
