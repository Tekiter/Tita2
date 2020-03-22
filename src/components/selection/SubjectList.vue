<template>
    <div>
        <v-data-iterator :items="items" :search="search" disable-pagination>
            <template v-slot:default="{ items }">
                <v-list>
                    <v-list-item
                        v-for="(subject, idx) in items"
                        :key="`subject-${idx}`"
                    >
                        {{ subject.name }}
                    </v-list-item>
                </v-list>
            </template>
        </v-data-iterator>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        search: {
            type: String,
            default: '',
        },
    },
    data: () => ({}),
    computed: {
        filtered() {
            return this.items.filter(subject => {
                return subject.name.includes(this.search)
            })
        },
    },
}
</script>
