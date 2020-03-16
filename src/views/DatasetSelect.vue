<template>
    <v-container>
        <h2>준비된 시간표로 시작하기</h2>
        <dataset-filter :schools="schools"></dataset-filter>
        <dataset-list></dataset-list>
    </v-container>
</template>
<script>
import DatasetFilter from '../components/dataset/DatasetFilter'
import DatasetList from '../components/dataset/DatasetList'
export default {
    components: {
        DatasetList,
        DatasetFilter,
    },
    data: () => ({
        schools: ['가톨릭대학교'],
    }),
}
</script>
