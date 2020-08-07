<template>
    <v-list shaped>
        <v-list-item-group v-model="item" color="primary">
            <f-navbar-item :item="item" v-for="(item, index) in items" :key="index"></f-navbar-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    import FNavbarItem from './NavbarItem'

    export default {
        data: () => ({
            item: null,
            items: require('../data/navbar.json')
        }),

        components: {
            FNavbarItem
        },
    }
</script>