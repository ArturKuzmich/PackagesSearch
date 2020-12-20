import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
const SET_LOADING = 'SET_LOADING';
const SET_PACKAGES = 'SET_PACKAGES';
const RESET_PACKAGES = 'RESET_PACKAGES';

const OPEN_MODAL = 'OPEN_MODAL'
const ADD_TO_MODAL = 'ADD_TO_MODAL'
const SET_SEARCH = 'SET_SEARCH'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packagesList: [],
    isModalVisible: false,
    // searchQuery: '',
    searchValue: '',
    loading:  false,
    modal: []
    // filteredPackages: []
  },
  mutations: {
    [SET_SEARCH_QUERY]: (state, searchQuery) => state.searchQuery = searchQuery,
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_PACKAGES]: (state, packagesList) => state.packagesList = packagesList,
    [RESET_PACKAGES]: state => state.packagesList = null,
    [OPEN_MODAL]: state => state.isModalVisible = !state.isModalVisible,
    [ADD_TO_MODAL]: (state, choosedPackage) => state.modal = choosedPackage,
    [SET_SEARCH]: ((state, value) => state.searchValue = value )

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
    toggleModal({commit}){
    commit('OPEN_MODAL')
    },
    addToModal({commit}, choosedPackage){
      commit('ADD_TO_MODAL', choosedPackage)
    },
    searchValue({commit}, value){
      commit('SET_SEARCH', value)
    }
  },
  getters: {
    Packages(state){
      return state.packagesList
    },
    modalPackage(state){
      return state.modal
    },
    ModalVisible(state){
      return state.isModalVisible
    },
    findValue(state) {
      return state.searchValue
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
