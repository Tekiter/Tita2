import { loadStorage, saveStorage } from '../utils/storage'
export default {
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
}
