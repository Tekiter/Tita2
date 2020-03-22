<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card>
                    <subject-filter :search.sync="search" />
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <subject-list :items="dataset.subjects" :search="search" />
                </v-card>
            </v-col>
            <v-col>
                <v-card></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import SubjectList from '../components/selection/SubjectList'
import SubjectFilter from '../components/selection/SubjectFilter'

export default {
    components: {
        SubjectList,
        SubjectFilter,
    },
    data: () => ({
        search: '',
    }),
    computed: {
        ...mapState(['dataset']),
        ...mapGetters(['hasDataset']),
    },
    methods: {
        ...mapActions(['loadCurrentStates']),
    },
    created() {
        this.loadCurrentStates()
        if (!this.hasDataset) {
            this.$router.push({ name: 'Home' })
        }
    },
}
</script>
