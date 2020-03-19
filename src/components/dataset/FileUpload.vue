<template>
    <div>
        <v-btn @click="showFileUploadDialog" :disabled="disabled">
            <v-icon left>mdi-plus</v-icon> {{ label }}
        </v-btn>
        <input
            type="file"
            class="d-none"
            ref="fileInput"
            :accept="accept"
            @change="addFileByDialog"
        />
    </div>
</template>
<script>
export default {
    props: {
        accept: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '파일 선택',
        },
    },
    methods: {
        showFileUploadDialog() {
            this.$refs.fileInput.click()
        },
        addFileByDialog(e) {
            if (e.target.files[0]) {
                this.$emit('upload', e.target.files[0])
            }
            e.target.value = ''
        },
    },
}
</script>
