import * as getters from './getters.js'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  board: {}
}

module = {
  namespaced: true,
  getters,
  actions,
  mutations,
  state
}

export default module
