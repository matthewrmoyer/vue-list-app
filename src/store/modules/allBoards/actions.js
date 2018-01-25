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
