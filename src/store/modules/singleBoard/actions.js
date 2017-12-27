export const getBoard = async ({ commit }, payload) => {
  let board = await {id: 1, name: '3rwaefs'} // get by id from backend here
  commit('setBoard', board)
}
