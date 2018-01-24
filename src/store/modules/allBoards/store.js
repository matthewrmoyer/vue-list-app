import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  boards: []
}

module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default module
