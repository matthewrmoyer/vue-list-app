import Vue from 'vue'

export const getBoards = async ({ commit }, payload) => {
  let boards = await (await Vue.http.get('https://vue-board-backend.herokuapp.com/boards')).json()
  commit('setBoardsData', boards)
}
