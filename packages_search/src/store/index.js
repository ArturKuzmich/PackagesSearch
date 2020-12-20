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
    packagesList: [],
    // searchQuery: '',
    loading:  false,
    // filteredPackages: []
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_PACKAGES]: (state, packagesList) => state.packagesList = packagesList,
    [RESET_PACKAGES]: state => state.packagesList = null,
  },
  actions: {
    // setSearchQuery({commit}, searchQuery) {
    //   commit(SET_SEARCH_QUERY, searchQuery);
    // },
    getPackages({commit}){
      commit(SET_LOADING, true);
      axios
          .get(`https://api.jsdelivr.com/v1/jsdelivr/libraries`)
          .then(response => {
            commit(SET_PACKAGES, response.data)
            commit(SET_LOADING, false);
          })
          .catch(error => {
            commit(RESET_PACKAGES, error)
          })
    },
  },
  getters: {
    Packages(state){
      return state.packagesList
    }
    // filteredPackages: state => state.packages
    //     .filter((p) => p
    //         .name
    //         .toLowerCase().trim()
    //         .includes(state.searchQuery.toLowerCase()))
  },
  modules: {
  }
})
