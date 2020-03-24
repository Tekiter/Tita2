import { saveStorage, loadStorage } from '../utils/storage'

export default {
    namespaced: true,
    state: {
        groups: [],
    },
    mutations: {
        SET_GROUPS(state, groups) {
            state.groups = groups
        },
        PUSH_GROUP(state, group) {
            state.groups.push(group)
        },
        POP_GROUP(state, idx) {
            state.groups.splice(idx, 1)
        },
        RESET_GROUPS(state) {
            state.groups = []
        },
    },
    actions: {
        createGroup({ commit, dispatch }) {
            commit('PUSH_GROUP', {
                name: '새 그룹',
                subjects: [],
            })
            dispatch('saveGroups')
        },
        deleteGroup({ commit, dispatch }, { idx }) {
            commit('POP_GROUP', idx)
            dispatch('saveGroups')
        },
        initGroups({ commit, dispatch }) {
            commit('RESET_GROUPS')
            dispatch('saveGroups')
        },
        saveGroups({ state }) {
            saveStorage('current-groups', state.groups)
        },
        loadGroups({ commit }) {
            const groups = loadStorage('current-groups', [])
            commit('SET_GROUPS', groups)
        },
    },
    getters: {},
}
