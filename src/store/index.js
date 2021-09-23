import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    data: {},
  },
  getters:{
    data: state => {
      return state.data;
    },
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('data')) {
        state.data = JSON.parse(localStorage.getItem('data'));
      }
    },
    setData(state, data) {
      state.data = data;
      localStorage.setItem('data', JSON.stringify(state.data));
    },
  },
  actions: {
  },
  modules: {
  }
})
