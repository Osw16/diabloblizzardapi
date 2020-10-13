// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

// Importar oauth
import oauth from './modules/oauth'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  // Aquuí registramos todos los módulos
  modules: {
    oauth,
    loading
  }
})
