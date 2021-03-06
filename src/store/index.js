import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  list:[],
  user: {
    name:''
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment(state) {
    state.list.push(state.count);
    state.count++
  },
  decrement(state) {
    state.list.push(state.count);
    state.count--
  },
  add(state, item) {
    state.list.push(item);
  },
  fetch(state, data) {
    state.user = data;
  },
  rest(state,data){
    state.list = state.list.concat(data);
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'), // increment:(context){context.commit('increment')}
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  add(context, item) {
    context.commit('add', item);
  },
  fetch({commit}) {
    // return axios.get(`http://localhost:5000/api/values`)
    //   .then(response => {
    //     let data = response.data || {};

    //     commit('fetch', data);
    //   })
  },
  rest({commit},data){
    commit('rest',data)
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  // evenOrOdd (state){
  //   state.count % 2 === 0 ? 'even' : 'odd';
  // }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})