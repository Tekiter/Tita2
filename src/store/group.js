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

        PUSH_SUBJECT(state, { group, subject }) {
            state.groups[group].subjects.push(subject)
        },
        POP_SUBJECT(state, { groupIdx, subjectIdx }) {
            state.groups[groupIdx].subjects.splice(subjectIdx, 1)
        },
    },
    actions: {
        // 새로운 그룹 생성
        createGroup({ state, commit, dispatch }) {
            commit('PUSH_GROUP', {
                name: `그룹 ${state.groups.length + 1}`,
                subjects: [],
            })
            dispatch('saveGroups')
        },
        // 특정 인덱스의 그룹 삭제
        deleteGroup({ commit, dispatch }, { idx }) {
            commit('POP_GROUP', idx)
            dispatch('saveGroups')
        },
        // 그룹 정보를 초기화
        initGroups({ commit, dispatch }) {
            commit('RESET_GROUPS')
            for (let i = 0; i < 3; i++) {
                dispatch('createGroup')
            }
            dispatch('saveGroups')
        },
        // 그룹들을 localStorage에 저장
        saveGroups({ state }) {
            saveStorage('current-groups', state.groups)
        },
        // 그룹들을 localStorage에서 로드
        loadGroups({ commit }) {
            const groups = loadStorage('current-groups', [])
            commit('SET_GROUPS', groups)
        },
        // 과목을 그룹에 추가
        addSubject({ commit, dispatch }, { groupIdx, subject }) {
            commit('PUSH_SUBJECT', { group: groupIdx, subject })
            dispatch('saveGroups')
        },
        deleteSubject({ commit, dispatch }, { groupIdx, subjectIdx }) {
            commit('POP_SUBJECT', { groupIdx, subjectIdx })
            dispatch('saveGroups')
        },
    },
    getters: {},
}
