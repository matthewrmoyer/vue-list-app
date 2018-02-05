import Vue from 'vue'

export const getBoard = async ({ commit }, payload) => {
  try {
    let board = await (await Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload}`)).json()
    commit('setBoard', board)
  } catch (error) {
    console.log(error)
  }
}

// payload = {id, item}
export const addItem = async ({ commit }, payload) => {
  console.log('addItem action dispatched')
  console.log(payload)
  try {
    let board = await (await Vue.http.post(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload.id}`, payload.item)).json()
    console.log(board)
    commit('setBoard', board)
  } catch (error) {
    console.log(error)
  }
}
