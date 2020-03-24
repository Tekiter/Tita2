import Vue from 'vue'
import Vuex from 'vuex'

import dataset from './dataset'
import group from './group'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: { dataset, group },
})
