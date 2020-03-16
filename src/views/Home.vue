<template>
    <v-container>
        <h1 class="display-4">Tita</h1>
        <p class="display-1">
            과목 후보를 넣으면 적절한 시간표를 만들어줍니다.
        </p>
        <v-btn :to="{ name: 'DatasetSelect' }">시작하기</v-btn>
    </v-container>
</template>

<script>
export default {
    name: 'Home',
    components: {},
}
</script>
