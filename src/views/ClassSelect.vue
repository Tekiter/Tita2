<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <schedule-preview
                        :current-subject="hover"
                    ></schedule-preview>
                    <subject-filter :search.sync="search"></subject-filter>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <subject-list
                        class="scrollable max-height"
                        :items="subjects"
                        :search="search"
                        @subjecthover="hover = $event"
                    ></subject-list>
                </v-card>
            </v-col>
            <v-col>
                <v-card></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss" scoped>
.scrollable {
    overflow-y: scroll;
}

.max-height {
    $height: 80vh;

    min-height: $height;
    height: $height;
}
</style>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import SubjectList from '../components/selection/SubjectList'
import SubjectFilter from '../components/selection/SubjectFilter'
import SchedulePreview from '../components/selection/SchedulePreview'

export default {
    components: {
        SubjectList,
        SubjectFilter,
        SchedulePreview,
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
        ...mapActions('dataset', ['loadCurrentStates']),
    },
    created() {
        this.loadCurrentStates()
        if (!this.hasDataset) {
            this.$router.push({ name: 'Home' })
        }
    },
}
</script>
