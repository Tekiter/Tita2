<template>
    <div class="group-item">
        <!-- 그룹 정보 표시 -->
        <div class="d-flex">
            <div v-if="!isEditing">
                <h3>{{ group.name }}</h3>
            </div>
            <div v-else>
                <v-text-field
                    ref="edit"
                    v-model="newName"
                    @blur="finishEditName"
                    @keypress.enter="finishEditName"
                    @keydown.esc="isEditing = false"
                    solo
                    hide-details
                    dense
                ></v-text-field>
                <!-- <input
                    type="text"
                    ref="edit"
                    v-model="newName"
                    @keypress.enter="finishEditName"
                /> -->
            </div>

            <v-btn
                class="ml-2"
                v-show="!isEditing"
                icon
                x-small
                @click="startEditName"
            >
                <v-icon>
                    mdi-pencil-outline
                </v-icon>
            </v-btn>
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
    data: () => ({
        isEditing: false,
        newName: '',
    }),
    methods: {
        clickDeleteGroup() {
            this.$emit('delete:group')
        },
        clickDeleteSubject(idx) {
            this.$emit('delete:subject', idx)
        },
        startEditName() {
            this.isEditing = true
            this.newName = this.group.name
            this.$nextTick(() => {
                this.$refs.edit.focus()
            })
        },
        finishEditName() {
            this.isEditing = false
            if (this.newName.trim() !== '') {
                this.$emit('update:name', this.newName)
            }
        },
    },
}
</script>
