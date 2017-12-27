import Vue from 'vue'
import Vuex from 'vuex'
import allBoards from './modules/allBoards/store'
import singleBoard from './modules/singleBoard/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    data: 'adf'
  },
  modules: {
    allBoards,
    singleBoard
  }
})
