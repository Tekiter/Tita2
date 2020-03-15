<template>
    <v-app>
        <appbar />
        <blank-layout></blank-layout>
    </v-app>
</template>

<style lang="scss">
@import './styles/index.scss';
</style>
<script>
import BlankLayout from './components/layouts/BlankLayout'
import Appbar from './components/core/Appbar'

export default {
    components: {
        Appbar,
        BlankLayout,
    },
}
</script>
