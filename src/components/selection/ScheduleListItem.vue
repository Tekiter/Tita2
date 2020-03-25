<template>
    <div class="subject">
        <h4>
            {{ subject.name }}
        </h4>
        <div class="d-flex">
            <div class="flex-grow-1">
                <p>{{ subject.major }}</p>
            </div>
            <v-menu top offset-x>
                <template v-slot:activator="{ on }">
                    <v-btn small v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-list dense>
                    <!-- <v-subheader>추가할 그룹</v-subheader> -->
                    <v-list-item
                        v-for="(group, idx) in groups"
                        :key="idx"
                        @click="clickAdd(idx)"
                    >
                        <v-list-item-title>{{ group.name }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.subject {
    padding: 1em;
}
</style>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: {
        subject: {
            type: Object,
        },
    },
    computed: {
        ...mapState('group', ['groups']),
    },
    methods: {
        ...mapActions('group', ['addSubject']),
        clickAdd(groupidx) {
            this.$emit('add', groupidx)
            this.addSubject({ groupIdx: groupidx, subject: this.subject })
        },
    },
}
</script>
