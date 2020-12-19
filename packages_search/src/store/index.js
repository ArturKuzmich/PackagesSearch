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
    filteredPackages: []
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_PACKAGES]: (state, packages) => state.packages = packages,
    [RESET_PACKAGES]: state => state.packages = null,
  },
  actions: {
    setSearchQuery({commit}, searchQuery) {
      commit(SET_SEARCH_QUERY, searchQuery);
    },
    search({commit, state}){
      commit(SET_LOADING, true);
      axios
          .get(`https://api.jsdelivr.com/v1/jsdelivr/libraries`)
          .then(res => {
            console.log(res)
            commit(SET_PACKAGES, res.data)
          })
    },
  },
  getters: {
    filteredPackages: state => state.packages
        .filter((p) => p
            .name
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase()))
        // .map((p) => p.name)
  },
  modules: {
  }
})
