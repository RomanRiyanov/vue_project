import axios from '@/plugins/axios'

export const state = () => ({
  test: 'Hello World!',
  guests: [],
})

export const getters = {
  getCurrentPost: (state) => (id) => {
    return state.guests.find((guest) => guest.id === parseInt(id))
  },
}

export const mutations = {
  SET_GUESTS(state, data) {
    // console.log('state in SET_GUESTS mutations', state)
    // console.log('data in SET_GUESTS mutations', data)
    state.guests = data
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getGuests')
  },
  getGuests({ commit }) {
    // getGuests(context, data) {
    // console.log('context in getGuests actions', context)
    // console.log('data in getGuests actios', data)
    return axios.get('/posts').then((res) => {
      const guests = res.data.splice(1, 10)
      commit('SET_GUESTS', guests)
    })
  },
}
