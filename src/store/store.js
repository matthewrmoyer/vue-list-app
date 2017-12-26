import Vue from 'vue'
import Vuex from 'vuex'
import allBoards from './modules/allBoards/store'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    data: 'adf'
  },
  modules: {
    allBoards
  }
})
