import Vue from 'vue'
import Vuex from 'vuex'

import { loadStorage, saveStorage } from '../utils/storage'

import dataset from './dataset'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dataset: {},
    },
    mutations: {
        SET_DATASET(state, dataset) {
            state.dataset = dataset
        },
    },
    actions: {
        saveDataset({ state }) {
            saveStorage('current-dataset', state.dataset)
        },
        loadDataset({ commit }) {
            const ld = loadStorage('current-dataset', {})
            commit('SET_DATASET', ld)
        },
        startSelection({ commit, dispatch }, { dataset }) {
            commit('SET_DATASET', dataset)
            dispatch('saveDataset')
        },
        loadCurrentStates({ dispatch }) {
            dispatch('loadDataset')
        },
    },
    getters: {
        hasDataset(state) {
            if (
                state.dataset &&
                'subjects' in state.dataset &&
                Array.isArray(state.dataset.subjects)
            ) {
                return true
            }
            return false
        },
    },
    modules: { dataset },
})
