export const setBoardsData = (state, payload) => {
  payload.forEach(b => {
    if (state.boards.filter(board => board.id === b.id).length === 0) {
      state.boards.push(b)
    }
  })
}
