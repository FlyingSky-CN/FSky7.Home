<template>
    <v-app :class="dark ? 'f-dark' : ''">
        <v-app-bar app prominent shrink-on-scroll elevate-on-scroll clipped-left :dark="dark">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{header.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="dark ? offDarkMode() : onDarkMode()">
                <v-icon>mdi-{{header.icon.darkmode}}</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" floating app clipped :dark="dark" class="mt-4">
            <f-navbar-list></f-navbar-list>
        </v-navigation-drawer>

        <v-main :dark="dark">
            <f-main-title></f-main-title>
            <v-container>
                <f-main-about :dark="dark"></f-main-about>
                <f-main-chips></f-main-chips>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Darkmode from './assets/darkmode'

    import FNavbarList from './components/NavbarList'
    import FMainTitle from './components/Title'
    import FMainAbout from './components/About'
    import FMainChips from './components/Chips'

    export default {
        name: 'App',

        components: {
            FNavbarList, FMainTitle, FMainAbout, FMainChips
        },

        data: () => ({
            onDarkMode() { },
            offDarkMode() { },
            header: require("./data/header.json"),
            dark: false,
            drawer: null,
        }),

        mounted() {
            Darkmode(this)
        },
    };
</script>

<style src="./assets/global.css"></style>