import Vue from 'vue'

export const getBoard = async ({ commit }, payload) => {
  try {
    let board = await (await Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload}`)).json()
    commit('setBoard', board)
  } catch (error) {
    console.log(error)
  }
}

export const addItem = async ({ commit }, payload) => {
  console.log('addItem action dispatched')
  let item = {
    board_id: payload.id,
    value: payload.item.value
  }
  try {
    await Vue.http.post('https://vue-board-backend.herokuapp.com/items/', item)
    let board = await (await Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload.id}`)).json()
    commit('setBoard', board)
  } catch (error) {
    console.log(error)
  }
}

export const deleteItem = async ({ commit }, payload) => {
  try {
    console.log(payload)
    await Vue.http.delete(`https://vue-board-backend.herokuapp.com/items/${payload.item_id}`)
    let board = await (await Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload.board_id}`)).json()
    commit('setBoard', board)
  } catch (error) {
    console.log(error)
  }
}

export const toggleItemComplete = async ({ commit }, payload) => {
  console.log(payload)
  try {
    await Vue.http.put(`https://vue-board-backend.herokuapp.com/items/${payload.item_id}`, {'is_complete': payload.is_complete, 'completed_by': payload.user})
    let board = await (await Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${payload.board_id}`)).json()
    commit('setBoard', board)
  } catch (error) {
    console.log(error)
  }
}
