import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  boards: [
    {
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
    },
    {
      id: 2,
      name: 'Chores',
      timestamp: '2017-12-23T22:17:53.451Z',
      creator: 'John Doe',
      users: [
        {id: 3, name: 'Steve'},
        {id: 8, name: 'Joe'},
        {id: 33, name: 'Sarah'},
        {id: 233, name: 'Paul'}
      ],
      items: [
        {
          id: 744444,
          list_id: 2,
          value: 'Get a Turkey',
          isComplete: false
        },
        {
          id: 45675,
          list_id: 2,
          value: 'Mow the Lawn',
          isComplete: true,
          completedBy: 'Sarah'
        },
        {
          id: 865,
          list_id: 2,
          value: 'Call Grandparents',
          isComplete: false,
          completedBy: false
        },
        {
          id: 23411,
          list_id: 2,
          value: 'Clean the Pool',
          isComplete: false,
          completedBy: false
        }
      ]
    }
  ]
}

module = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default module
