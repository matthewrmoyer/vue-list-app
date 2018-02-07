import Vue from 'vue'

export const getBoards = async ({ commit }, payload) => {
  let boards = await (await Vue.http.get('https://vue-board-backend.herokuapp.com/boards')).json()
  let boardPromises = boards.map(board => {
    return Vue.http.get(`https://vue-board-backend.herokuapp.com/boards/singleboard/${board.id}`)
  })
  let boardData = await Promise.all(boardPromises)
  let fullBoards = boardData.map(b => {
    let {board, creator, content, users} = b['body']
    return {board, creator, content, users}
  })
  commit('setBoardsData', fullBoards)
}

export const addBoard = async ({ commit }, payload) => {
  console.log('addboard dispatchx')
  console.log(payload)
  // post to /boards
  // use return object json to get the boards id
  // get single board using id
  // modify board to match dataset
  // push board to state using push board mutation
}
