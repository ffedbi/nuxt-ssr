<template lang="pug">
	el-table(:data='posts', style='width: 100%')
		el-table-column(label='Название', prop="title")
		el-table-column(label='Дата')
			template(slot-scope='{row: {date}}')
				i.el-icon-time
				span(style='margin-left: 10px') {{ date | date }}
		el-table-column(label='Просмотры', prop="views")
			template(slot-scope='{row: {views}}')
				i.el-icon-view
				span(style='margin-left: 10px') {{ views }}
		el-table-column(label='Комментарии', prop="comment")
			template(slot-scope='{row: {comments}}')
				i.el-icon-message
				span(style='margin-left: 10px') {{ comments.length }}
		el-table-column(label='Действия')
			template(slot-scope='{row}')
				el-tooltip(effect='dark', content='Открыть пост', placement='top')
					el-button(icon="el-icon-edit" circle type='primary', @click='open(row._id)')
				el-tooltip(effect='dark', content='Удалить пост', placement='top')
					el-button(icon="el-icon-delete" circle type='danger', @click='remove(row._id)')
</template>

<script>
	export default {
		name: "list",
		layout: 'admin',
		middleware: ['admin-auth'],
		head: {
			title: `Все посты | ${process.env.appName}`
		},
		async asyncData({store}) {
			const posts = await store.dispatch('post/fetchAdmin');
			return {posts};
		},
		methods: {
			open(id) {
				this.$router.push(`/admin/post/${id}`)
			},
			async remove(id) {
				try {
					await this.$confirm('Удалить пост?', 'Внимание!', {
						confirmButtonText: 'Да',
						cancelButtonText: 'Отменить',
						type: 'warning'
					});

					await this.$store.dispatch('post/remove', id);
					this.posts = this.posts.filter(p => p._id !== id);
					this.$message.success('Пост удалён')
				} catch (e) {

				}
			}
		}
	}
</script>

<style scoped>

</style>
