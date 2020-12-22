import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


const SET_LOADING = 'SET_LOADING';
const SET_PACKAGES = 'SET_PACKAGES';
const OPEN_MODAL = 'OPEN_MODAL'
const ADD_TO_MODAL = 'ADD_TO_MODAL'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    packagesList: [],
    isModalVisible: false,
    loading:  false,
    setToModal: []
  },

  mutations: {
    [SET_LOADING]: (state, loading) => state.loading = loading,
    [SET_PACKAGES]: (state, packagesList) => state.packagesList = packagesList,
    [OPEN_MODAL]: state => state.isModalVisible = !state.isModalVisible,
    [ADD_TO_MODAL]: (state, selectedPackage) => state.setToModal = selectedPackage,

  },
  actions: {
    getPackages({commit}){
      commit(SET_LOADING, true);
      axios
          .get(`https://api.jsdelivr.com/v1/jsdelivr/libraries`)
          .then(response => {
            commit(SET_PACKAGES, response.data)
            commit(SET_LOADING, false);
          })
          .catch(error => {
            console.log(error)
            commit(SET_LOADING, true);
          })
    },
    toggleModal({commit}){
    commit('OPEN_MODAL')
    },
    addToModal({commit}, selectedPackage){
      commit('ADD_TO_MODAL', selectedPackage)
    },
  },
  getters: {
    searchPackages(state, search){
      return state.packagesList
    },
    // searchPackages: state => search => state.packagesList
    //     .filter(item =>
    //         item.name
    //             .toLowerCase().trim()
    //             .includes(search.toLowerCase())),

    modalPackage(state){
      return state.setToModal
    },
    ModalVisible(state){
      return state.isModalVisible
    },


  },
  modules: {
  }
})
