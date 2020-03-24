<template>
    <div class="group-item">
        <div class="d-flex">
            <h3>{{ group.name }}</h3>
            <v-spacer></v-spacer>
            <v-btn small @click="clickDeleteButton">
                <v-icon>
                    mdi-delete
                </v-icon>
            </v-btn>
        </div>
        <div>
            <div v-for="(subject, idx) of group.subjects" :key="idx">
                {{ subject }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.group-item {
    padding: 1em;
}
</style>
<script>
export default {
    props: {
        group: {
            type: Object,
        },
    },
    methods: {
        clickDeleteButton() {
            this.$emit('delete')
        },
    },
}
</script>
