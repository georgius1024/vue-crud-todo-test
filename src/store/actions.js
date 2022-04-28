export default {
  loadTodos({ commit }, data) {
    commit("updateTodos", data);
  },
  login({ commit }, credentials) {
    commit("setUser", credentials);
  },
}