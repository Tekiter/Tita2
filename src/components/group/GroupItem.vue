<template>
    <div class="group-item">
        <!-- 그룹 정보 표시 -->
        <div class="d-flex">
            <h3>{{ group.name }}</h3>
            <!-- <v-btn class="ml-2" icon small>
                <v-icon>
                    mdi-pencil-outline
                </v-icon>
            </v-btn> -->
            <v-spacer></v-spacer>
            <v-btn small @click="clickDeleteGroup">
                <v-icon>
                    mdi-delete
                </v-icon>
            </v-btn>
        </div>

        <!-- 선택한 과목들 -->
        <div>
            <div
                class="group-subject"
                v-for="(subject, idx) of group.subjects"
                :key="idx"
            >
                <h4>{{ subject.name }}</h4>
                <div>
                    {{ subject.time | subjectTime }}
                </div>
                <v-btn small icon @click="clickDeleteSubject(idx)">
                    <v-icon>mdi-delete </v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.group-item {
    padding: 1em;
}

.group-subject {
}
</style>
<script>
import timeMixin from '../../mixins/time'

export default {
    mixins: [timeMixin],
    props: {
        group: {
            type: Object,
        },
    },
    methods: {
        clickDeleteGroup() {
            this.$emit('delete:group')
        },
        clickDeleteSubject(idx) {
            this.$emit('delete:subject', idx)
        },
    },
}
</script>
