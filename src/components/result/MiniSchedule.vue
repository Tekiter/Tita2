<template>
    <div>
        <canvas ref="timeTable"></canvas>
    </div>
</template>
<style scoped></style>
<script>
export default {
    props: {
        resultSubjects: {
            type: Object,
            default: () => ({}),
        },
    },
    mounted() {
        this.$refs['timeTable'].width
    },
}
</script>
