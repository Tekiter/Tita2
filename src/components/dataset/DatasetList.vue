<template>
    <div>
        <v-list subheader mandatory>
            <v-list-item-group>
                <v-list-item>asdf</v-list-item>
            </v-list-item-group>
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
    },
}
</script>
