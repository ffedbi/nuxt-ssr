<template lang="pug">
	header
		nav.navbar.navbar-expand-lg.navbar-light.bg-light
			a.navbar-brand(href='#') NuxtJS
			.collapse.navbar-collapse.show
				ul.navbar-nav.mr-auto
					li.nav-item
						nuxt-link(tag="a" no-prefetch to='/' exact active-class="active").nav-link Home
					li.nav-item
						nuxt-link(tag="a" no-prefetch to='/users' active-class="active").nav-link Users
					li.nav-item
						nuxt-link(tag="a" no-prefetch to='/about' active-class="active").nav-link About
					li.nav-item
						nuxt-link(tag="a" no-prefetch to='/login' active-class="active").nav-link Login
					li(v-if="isAuth").nav-item
						a(href="#" @click="logout").nav-link Logout

</template>

<script>
	export default {
		methods: {
			logout() {
				this.$store.dispatch('logout')
			}
		},
		computed: {
			isAuth() {
				return this.$store.getters.isAuth;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>

