import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_LOADING = 'SET_LOADING';
const SET_PACKAGES = 'SET_PACKAGES';
const RESET_PACKAGES = 'RESET_PACKAGES';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    loading:  false,
    packages: null,
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_PACKAGES]: (state, packages) => state.packages = packages,
    [RESET_PACKAGES]: state => state.packages = null
  },
  actions: {
    setSearchQuery({commit}, searchQuery) {
      commit(SET_SEARCH_QUERY, searchQuery);
    },
    async search({commit, state}) {
      commit(SET_LOADING, true);
      try {
        const {data} = await axios.get(`https://api.jsdelivr.com/v1/jsdelivr/libraries?name=${state.searchQuery}`);
        console.log(data)
        commit(SET_PACKAGES, data);
      } catch (e) {
        commit(RESET_PACKAGES);
      }
      commit(SET_LOADING, false);
    }
  },
  modules: {
  }
})
