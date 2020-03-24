import { loadStorage, saveStorage } from '../utils/storage'

export default {
    namespaced: true,
    state: {
        school: '',
        timespan: '',
        subjects_raw: [],
    },
    mutations: {
        SET_DATASET(state, dataset) {
            state.school = dataset.school
            state.timespan = dataset.timespan
            state.subjects_raw = dataset.subjects
        },
    },
    actions: {
        saveDataset({ state }) {
            saveStorage('current-dataset', {
                school: state.school,
                timespan: state.timespan,
                subjects: state.subjects_raw,
            })
        },
        loadDataset({ commit }) {
            const ld = loadStorage('current-dataset', {})
            commit('SET_DATASET', ld)
        },
        startSelection({ commit, dispatch }, { dataset }) {
            console.log(dataset)
            commit('SET_DATASET', dataset)
            dispatch('saveDataset')
        },
        loadCurrentStates({ dispatch }) {
            dispatch('loadDataset')
        },
    },
    getters: {
        subjects({ subjects_raw }) {
            return subjects_raw.map((subject, idx) => {
                return {
                    ...subject,
                    idx,
                }
            })
        },
        hasDataset(_, { subjects }) {
            if (Array.isArray(subjects)) {
                return true
            }
            return false
        },
    },
}
