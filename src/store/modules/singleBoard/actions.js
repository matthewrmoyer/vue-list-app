export const getBoard = async ({ commit }, payload) => {
  // let board = await... // get by id from backend here
  let board = await {
    id: 1,
    name: 'Shopping List',
    timestamp: '2017-12-27T22:17:53.451Z',
    creator: 'John Doe',
    users: [
      {id: 3, name: 'Steve'},
      {id: 8, name: 'Joe'},
      {id: 33, name: 'Sarah'},
      {id: 233, name: 'Paul'}
    ],
    items: [
      {
        id: 4,
        list_id: 1,
        value: 'Milk',
        isComplete: true,
        completedBy: 'Joe'
      },
      {
        id: 5,
        list_id: 1,
        value: 'Cheese',
        isComplete: false,
        completedBy: false
      },
      {
        id: 8,
        list_id: 1,
        value: 'Eggs',
        isComplete: false,
        completedBy: false
      },
      {
        id: 4224,
        list_id: 1,
        value: 'Salt',
        isComplete: false,
        completedBy: false
      }
    ]
  }
  commit('setBoard', board)
}
