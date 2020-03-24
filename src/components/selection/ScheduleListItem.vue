<template>
    <div class="subject">
        <h4>
            {{ subject.name }}
        </h4>
        <div class="d-flex">
            <div class="flex-grow-1">
                <p>{{ subject.major }}</p>
            </div>
            <v-btn small @click="clickAddButton">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.subject {
    padding: 1em;
}
</style>
<script>
export default {
    props: {
        subject: {
            type: Object,
        },
    },
    methods: {
        clickAddButton() {
            this.$emit('add', this.subject)
        },
    },
}
</script>
