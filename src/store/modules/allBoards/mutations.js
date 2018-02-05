export const setBoardsData = (state, payload) => {
  payload.forEach(b => {
    if (state.boards.filter(board => board.board.id === b.board.id).length === 0) {
      state.boards.push(b)
    }
  })
}
