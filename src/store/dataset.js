import { loadStorage, saveStorage } from '../utils/storage'

export default {
    namespaced: true,
    state: {
        school: '',
        timespan: '',
        subjects: [],
    },
    mutations: {
        SET_DATASET(state, dataset) {
            state.school = dataset.school
            state.timespan = dataset.timespan
            state.subjects = dataset.subjects
        },
    },
    actions: {
        saveDataset({ state }) {
            saveStorage('current-dataset', {
                school: state.shool,
                timespan: state.timespan,
                subjects: state.subjects,
            })
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
        hasDataset({ subjects }) {
            if (Array.isArray(subjects)) {
                return true
            }
            return false
        },
    },
}
