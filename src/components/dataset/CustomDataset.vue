<template>
    <div>
        <file-upload
            @upload="userUpload"
            accept="application/json"
        ></file-upload>
        <v-list subheader>
            <v-list-item
                v-for="(dataset, key) in datasetList"
                :key="`local-dataset-${key}`"
            >
                <v-list-item-content>
                    {{ dataset.school }} {{ dataset.timespan }}
                </v-list-item-content>
                <v-list-item-action>
                    <div class="d-flex">
                        <v-btn icon @click="deleteDataset(key)">
                            <v-icon>
                                mdi-delete
                            </v-icon>
                        </v-btn>
                        <v-btn class="ml-2" @click="selectDataset(key)">
                            시작하기
                        </v-btn>
                    </div>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
import FileUpload from './FileUpload'

import {
    readDataset,
    saveDataset,
    getDatasetList,
    removeDataset,
    getDataset,
} from '../../utils/dataset'

export default {
    components: {
        FileUpload,
    },
    data: () => ({
        datasetList: {},
    }),
    methods: {
        fetchDatasets() {
            this.datasetList = getDatasetList()
        },
        async userUpload(file) {
            const dataset = await readDataset(file)
            saveDataset(dataset)
            this.fetchDatasets()
        },
        deleteDataset(key) {
            removeDataset(key)
            this.fetchDatasets()
        },
        selectDataset(key) {
            const dataset = getDataset(key)
            this.$emit('choose', dataset)
        },
    },
    async created() {
        this.fetchDatasets()
    },
}
</script>
