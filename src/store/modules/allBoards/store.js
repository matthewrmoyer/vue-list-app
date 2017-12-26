import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  boards: [
    'board1',
    'board2',
    'board3',
    'board4',
    'board5',
    'board6'
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
