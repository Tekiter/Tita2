<template>
    <div>
        <file-upload
            @upload="userUpload"
            accept="application/json"
        ></file-upload>
        <v-list subheader>
            <v-list-item-group>
                <v-list-item
                    v-for="(dataset, key) in datasetList"
                    :key="`local-dataset-${key}`"
                >
                    <v-list-item-content>
                        {{ dataset.school }} {{ dataset.timespan }}
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn>시작하기</v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
import FileUpload from './FileUpload'

import { readDataset, saveDataset, getDatasetList } from '../../utils/dataset'

export default {
    components: {
        FileUpload,
    },
    data: () => ({
        datasetList: {},
    }),
    methods: {
        async userUpload(file) {
            const dataset = await readDataset(file)
            // console.log(dataset)
            saveDataset(dataset)
        },
    },
    async created() {
        this.datasetList = getDatasetList()
    },
}
</script>
