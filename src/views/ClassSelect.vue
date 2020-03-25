<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card class="max-height">
                    <schedule-preview
                        :current-subject="hover"
                    ></schedule-preview>
                    <subject-filter :search.sync="search"></subject-filter>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="max-height d-flex flex-column">
                    <!-- <subject-list
                        class="scrollable flex-grow-1"
                        :items="subjects"
                        :search="search"
                        @subjecthover="hover = $event"
                    ></subject-list> -->
                    <subject-manage
                        @subjecthover="hover = $event"
                    ></subject-manage>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="max-height">
                    <group-manage></group-manage>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss" scoped>
.max-height {
    $height: 80vh;

    min-height: $height;
    height: $height;
}
</style>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import SubjectManage from '../components/selection/SubjectManage'
// import SubjectList from '../components/selection/SubjectList'
import SubjectFilter from '../components/selection/SubjectFilter'
import SchedulePreview from '../components/selection/SchedulePreview'
import GroupManage from '../components/group/GroupManage'

export default {
    components: {
        SubjectManage,
        // SubjectList,
        SubjectFilter,
        SchedulePreview,
        GroupManage,
    },
    data: () => ({
        search: '',
        hover: {},
    }),
    computed: {
        ...mapState('dataset', {
            // subjects: s => s.subjects,
        }),
        ...mapGetters('dataset', ['hasDataset', 'subjects']),
    },
    methods: {
        ...mapActions('dataset', ['loadDataset']),
        ...mapActions('group', ['loadGroups']),
    },
    created() {
        this.loadDataset()
        if (!this.hasDataset) {
            this.$router.push({ name: 'Home' })
        }
        this.loadGroups()
    },
}
</script>
