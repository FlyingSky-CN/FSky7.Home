<template>
    <v-list shaped>
        <v-list-item-group color="primary" v-model="item">
            <f-navbar-item :item="item" v-for="(item, index) in items" :key="index"></f-navbar-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    import FNavbarItem from './NavbarItem'

    export default {
        data: () => ({
            item: 0,
            items: require('../data/navbar.json')
        }),

        components: {
            FNavbarItem
        },
    }
</script>