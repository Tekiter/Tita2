<template>
    <div class="fill-height d-flex flex-column">
        <div>
            <v-toolbar flat dense color="primary" dark>
                <v-toolbar-title>
                    과목
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>
                        mdi-plus
                    </v-icon>
                </v-btn>
            </v-toolbar>
        </div>
        <div class="flex-grow-1 scrollable">
            <subject-list
                :items="subjects"
                :search="search"
                @subjecthover="$emit('subjecthover', $event)"
            ></subject-list>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

import SubjectList from './SubjectList'

export default {
    components: {
        SubjectList,
    },
    props: {
        search: {
            type: String,
            default: '',
        },
    },
    data: () => ({}),
    computed: {
        ...mapGetters('dataset', ['hasDataset', 'subjects']),
    },
    methods: {},
}
</script>
