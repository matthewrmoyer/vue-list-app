import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  boards: [
    {name: 'board1', id: 1},
    {name: 'board2', id: 2},
    {name: 'board3', id: 3},
    {name: 'board4', id: 4},
    {name: 'board5', id: 5},
    {name: 'board6', id: 6}
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
