import Vue from 'vue'
import Vuex from 'vuex'

import dataset from './dataset'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        startSelection({ commit, dispatch }, { dataset }) {
            commit('SET_DATASET', dataset)
            dispatch('saveDataset')
        },
        loadCurrentStates({ dispatch }) {
            dispatch('loadDataset')
        },
    },
    getters: {},
    modules: { dataset },
})
