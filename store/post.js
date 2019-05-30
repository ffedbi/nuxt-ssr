const posts = [
	{title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: '123'},
	{title: 'Post 2', date: new Date(), views: 22, comments: [1, 2], _id: '132'},
	{title: 'Post 3', date: new Date(), views: 22, comments: [1, 2], _id: '321'},
]

export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
	async fetchAdmin({}) {
		return await new Promise((resolve) => {
			setTimeout(() => {
				resolve(posts)
			}, 1000)
		})
	},
	async remove({}, id) {

	},
	async update({}, {id, text}) {

	},
	async create({}, {title, text}) {
		return await new Promise((resolve) => {
			setTimeout(() => {
				resolve()
			}, 1000)
		})
	},
	async fetchAdminById({}, id) {
		return await new Promise((resolve) => {
			setTimeout(() => {
				resolve(posts.find(p => p._id === id))
			}, 1000)
		})
	}
};
