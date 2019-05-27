export const actions = {
  async fetchUsers() {
    try {
      const users = this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      return users;
    } catch (e) {
      throw e;
    }
  },
  async fetchUserById({}, userId) {
    try {
      return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    } catch (e) {
      throw e;
    }
  }
}
