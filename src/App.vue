<template>
    <v-app :class="dark ? 'f-dark' : ''">
        <v-app-bar app prominent shrink-on-scroll elevate-on-scroll clipped-left :dark="dark">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>FlyingSky's Home</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="dark ? offDarkMode() : onDarkMode()">
                <v-icon>mdi-brightness-4</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" floating app clipped :dark="dark" class="mt-4">
            <f-navbar-list></f-navbar-list>
        </v-navigation-drawer>

        <v-main :dark="dark">
            <f-main-title></f-main-title>
            <v-container>
                
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import Darkmode from './assets/darkmode'

    import FNavbarList from './components/NavbarList'
    import FMainTitle from './components/Title'

    export default {
        name: 'App',

        components: {
            FNavbarList, FMainTitle
        },

        data: () => ({
            onDarkMode() { },
            offDarkMode() { },
            dark: false,
            drawer: null,
        }),

        mounted() {
            Darkmode(this)
        },
    };
</script>

<style src="./assets/global.css"></style>