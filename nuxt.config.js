const pkg = require('./package');

module.exports = {
	mode: 'spa',

	/*
	** Headers of the page
	*/
	head: {
		title: pkg.name,
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: 'Блог написан с использованием SSR'},
			{hid: 'keywords', name: 'keywords', content: 'js, javascript, ssr, blog'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: {color: '#409eff'},

	/*
	** Global CSS
	*/
	css: [
		'element-ui/lib/theme-chalk/index.css',
		'@theme/style.scss'
	],

	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{src: '@/plugins/globals', mode: 'client'},
		'@/plugins/axios'
	],

	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
	],

	workbox: {},

	meta: {},

	/*
	** Axios module configuration
	*/
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		baseURL: process.env.BASE_URL || 'http://localhost:3000'
	},

	env: {
		appName: 'SSR Blog'
	},

	generate: {
		minify: {
			collapseWhitespace: false
		}
	},

	/*
	** Build configuration
	*/
	build: {
		transpile: [/^element-ui/],

		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {
		}
	}
}
