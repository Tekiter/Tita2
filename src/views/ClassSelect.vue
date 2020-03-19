<template>
    <v-container>
        <p>
            {{ dataset }}
        </p>
    </v-container>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    data: () => ({}),
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
