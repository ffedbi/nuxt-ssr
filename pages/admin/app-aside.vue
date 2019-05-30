<template lang="pug">
	el-menu.el-menu-vertical-demo(:default-active='$route.pathc' router).menu
		el-menu-item(index="/admin")
			i.el-icon-data-analysis
			span Аналитика
		el-menu-item(index="/admin/create")
			i.el-icon-edit-outline
			span Создать
		el-menu-item(index="/admin/list")
			i.el-icon-tickets
			span Посты
		el-menu-item(index="/admin/user")
			i.el-icon-service
			span Пользователи
		el-menu-item(index="/admin/logout")
			i.el-icon-back
			span Выйти
</template>

<script>
	export default {
		name: "app-aside",
		middleware: ['admin-auth']
	}
</script>

<style scoped lang="scss">
	.menu {
		height: 100%;
	}
</style>
