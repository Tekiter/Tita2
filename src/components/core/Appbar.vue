<template>
    <v-app-bar app>
        <v-toolbar-title>
            <router-link class="app-title" :to="{ name: 'Home' }">
                Tita
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            v-if="isClassSelectPage"
            @click="gotoResultPage"
            class="text-none primary"
            depressed
        >
            시간표 만들기!
        </v-btn>
    </v-app-bar>
</template>
<style lang="scss" scoped>
.app-title {
    text-decoration: none;
    color: black;
}
</style>
<script>
export default {
    methods: {
        gotoResultPage() {
            this.$router.push({ name: 'Result' })
        },
    },
    computed: {
        isClassSelectPage() {
            return this.$route.name === 'ClassSelect'
        },
    },
}
</script>
