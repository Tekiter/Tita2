<template>
    <v-container>
        <div>
            <h2>과목목록 가져오기</h2>
            <custom-dataset />
        </div>
        <div>
            <h2>준비된 과목목록으로 시작하기</h2>
            <dataset-list :schools="schools"></dataset-list>
        </div>
    </v-container>
</template>
<script>
import DatasetList from '../components/dataset/DatasetList'
import CustomDataset from '../components/dataset/CustomDataset'

export default {
    components: {
        DatasetList,
        CustomDataset,
    },
    data: () => ({
        schools: [],
    }),
    methods: {},
}
</script>
