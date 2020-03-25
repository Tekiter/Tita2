<template>
    <div class="fill-height d-flex flex-column">
        <div>
            <v-toolbar flat dense color="primary" dark>
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
        </div>
        <div class="flex-grow-1 scrollable">
            <group-item
                v-for="(group, idx) of groups"
                :key="idx"
                :group="group"
                @delete:group="clickDeleteGroup(idx)"
                @delete:subject="clickDeleteSubject(idx, $event)"
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
        ...mapActions('group', ['createGroup', 'deleteGroup', 'deleteSubject']),
        clickDeleteGroup(idx) {
            this.deleteGroup({ idx })
        },
        clickDeleteSubject(groupIdx, subjectIdx) {
            this.deleteSubject({ groupIdx, subjectIdx })
        },
    },
}
</script>
