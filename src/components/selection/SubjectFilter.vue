<template>
    <div>
        <v-text-field
            label="검색"
            :value="search"
            @change="$emit('update:search', $event)"
            solo
        ></v-text-field>
    </div>
</template>
<script>
export default {
    props: {
        search: {
            type: String,
            default: '',
        },
    },
}
</script>
