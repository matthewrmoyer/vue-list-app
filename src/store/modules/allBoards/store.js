import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  boards: [
    'board1',
    'board2'
  ]
}

module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default module
