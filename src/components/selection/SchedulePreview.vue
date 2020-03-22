<template>
    <div>
        <p>
            Preview
            {{ currentSubject }}
        </p>
    </div>
</template>
<style lang="scss" scoped></style>
<script>
export default {
    props: {
        currentSubject: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>
