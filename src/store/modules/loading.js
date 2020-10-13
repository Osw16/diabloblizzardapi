// No olvidemos que esto es solo una práctica y lo más probable es que hacer esto en un proyecto pequeño (como este) no tenga sentido.

export default {
  namespaced: true,
  state: {
    isLoading: false
  },
  mutations: {
    SET_LOADING (state, payload) {
      state.isLoading = payload
    }
  }
}
