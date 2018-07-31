import _ from 'lodash'

const state = {
  events: [
    {
      _id: 1,
      title: '👉 Gooogle IO 2017',
      lead: 'Ayman',
      modaretor: 'Adnan',
      date: '2018-07-17',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et earum hic repudiandae, alias cupiditate non in a, facere, cum impedit tempora delectus harum illo deserunt quaerat minima quasi? Rerum!',
      imageLink:
        'https://storage.googleapis.com/io2017/v1/common/io17-social-1200x630-indigo.png'
    },
    {
      _id: 2,
      title: '👉 Gooogle IO 2018',
      lead: 'Adnan',
      modaretor: 'Ayman',
      date: '2018',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia et earum hic repudiandae, alias cupiditate non in a, facere, cum impedit tempora delectus harum illo deserunt quaerat minima quasi? Rerum!',
      imageLink:
        'https://storage.googleapis.com/io-2018.appspot.com/v1/io-social-banner.png'
    }
  ]
}
const getters = {
  getEvents: state => state.events,
  getEventsAmmount: (state, getters) => getters.getEvents.length,
  getEventByID: (state, getters) => id =>
    getters.getEvents.find(el => el._id === id)
}
const mutations = {
  setEvent (state, id, data) {
    _.merge(state.events.find(el => el._id === id), data)
  },
  deleteEvent (state, id) {
    let index = state.events.findIndex(el => el._id === id)
    state.events.splice(index, 1)
  },
  addEvent (state, data) {
    state.events.push(data)
  }
}
const actions = {
  UPDATE_EVENTS ({ commit }, payload) {
    commit('setEvent', payload._id, payload)
  },
  ADD_EVENT ({ commit }, payload) {
    commit('addEvent', payload)
  },
  DELETE_EVENT ({ commit }, payload) {
    let id = payload._id
    commit('deleteEvent', id)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
