<template>
    <v-row no-gutters>
        <v-col>
            <v-autocomplete label="학교" :items="schools"> </v-autocomplete>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: {
        schools: {
            type: Array,
            default: () => [],
        },
        value: {
            type: String,
        },
    },
    data: () => ({}),
}
</script>
