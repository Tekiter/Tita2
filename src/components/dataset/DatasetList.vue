<template>
    <div>
        <v-row no-gutters>
            <v-col>
                <v-autocomplete label="학교" :items="schools"> </v-autocomplete>
            </v-col>
        </v-row>
        <v-list subheader mandatory>
            <v-list-item-group> </v-list-item-group>
        </v-list>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
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
