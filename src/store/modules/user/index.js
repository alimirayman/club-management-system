import _ from 'lodash'
import axios from '../../../helpers/axios'
import { user, login } from '../../../api'
const state = {
  profile: {
    name: 'Mir Ayman',
    email: 'alimirayman@outlook.com',
    id: '1234',
    phone: '54321',
    department: 'CSE',
    approve: 1,
    admin: 1,
    modaretor: 1,
    position: 'HR',
    address: 'Uttara',
    remarks: ''
  },
  users: [
    {
      _id: 1,
      name: 'Mir Ayman',
      email: 'alimirayman@outlook.com',
      id: '1234',
      phone: '54321',
      department: 'CSE',
      approve: 1,
      admin: 1,
      modaretor: 1,
      position: 'HR',
      address: 'Uttara',
      remarks: ''
    },
    {
      _id: 2,
      name: 'Mir Ayman',
      email: 'alimirayman@outlook.com',
      id: '1234',
      phone: '54321',
      department: 'CSE',
      approve: 0,
      admin: 1,
      modaretor: 1,
      position: 'HR',
      address: 'Uttara',
      remarks: ''
    }
  ]
}
const getters = {
  getApplicants: state => state.users.filter(el => el.approve !== 1),
  getMembers: state => state.users.filter(el => el.approve === 1),
  getProfile: state => state.profile,
  getApplicantsAmmount: (state, getters) => getters.getApplicants.length,
  getMembersAmmount: (state, getters) => getters.getMembers.length,
  getApplicantByID: (state, getters) => id =>
    state.users.find(el => el._id === id),
  getMemberByID: (state, getters) => id =>
    getters.getMembers.find(el => el._id === id)
}
const mutations = {
  setApplicant (state, id, data) {
    _.merge(state.users.find(el => el._id === id), data)
  },
  deleteApplicant (state, id) {
    let index = state.users.findIndex(el => el._id === id)
    state.users.splice(index, 1)
  },
  addApplicant (state, data) {
    data._id = state.users[state.users.length - 1]._id++
    state.users.push(data)
  },
  login (state, data) {
    state.profile = data
  },
  logout (state) {
    state.profile = {}
    state.users = []
  }
}
const actions = {
  UPDATE_APPLICANT ({ commit }, payload) {
    commit('setApplicant', payload._id, payload)
  },
  DELETE_APPLICANT ({ commit }, payload) {
    let id = payload._id
    commit('deleteApplicant', id)
  },
  REGISTER_APPLICANT: async ({ commit }, payload) => {
    console.log(payload)
    commit('addApplicant', payload)
    let { data } = await axios.post(user, payload)
    localStorage.setItem('token', data.token)
    commit('login', payload)
  },
  LOGIN: async ({ commit }, logData) => {
    let { data } = await axios.post(login, logData)
    console.log(data)
    commit('login', logData)
  },
  LOGOUT ({ commit }) {
    commit('logout')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
