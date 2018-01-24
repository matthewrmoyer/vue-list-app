import Vue from 'vue'

export const getBoard = async ({ commit }, payload) => {
  let board = await (await Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload}`)).json()
  commit('setBoard', board)
}
