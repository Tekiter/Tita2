<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <mini-schedule></mini-schedule>
            </v-col>
            <v-col>
                hjk
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from 'vuex'

import MiniSchedule from '../components/result/MiniSchedule'
export default {
    components: {
        MiniSchedule,
    },
    computed: {
        ...mapState('group', ['groups']),
    },
    created() {},
}
</script>
