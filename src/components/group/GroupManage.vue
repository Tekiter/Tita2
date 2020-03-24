<template>
    <div>
        <v-toolbar flat>
            <v-toolbar-title>
                그룹
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="createGroup">
                <v-icon>
                    mdi-plus
                </v-icon>
            </v-btn>
        </v-toolbar>
        <div>
            <group-item
                v-for="(group, idx) of groups"
                :key="idx"
                :group="group"
                @delete="clickDeleteGroup(idx)"
            ></group-item>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import GroupItem from './GroupItem'

export default {
    components: {
        GroupItem,
    },
    data: () => ({}),
    computed: {
        ...mapState('group', {
            groups: state => state.groups,
        }),
        ...mapGetters('group', []),
    },
    methods: {
        ...mapActions('group', ['createGroup', 'deleteGroup']),
        clickDeleteGroup(idx) {
            this.deleteGroup({ idx })
        },
    },
}
</script>
