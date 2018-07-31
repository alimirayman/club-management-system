import Vue from 'vue'
import Vuex from 'vuex'

// Importing Modules
import auth from './modules/user'
import events from './modules/events'

Vue.use(Vuex)

const state = {}
const getters = {}
const mutations = {}
const actions = {}
const modules = {
  auth,
  events
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

export default store
