<template>
    <v-app :class="dark ? 'f-dark' : ''">
        <v-app-bar
            app
            elevate-on-scroll
            clipped-left
            :dark="dark"
            :color="dark ? '#212121' : '#fff'"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{header.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="dark ? offDarkMode() : onDarkMode()">
                <v-icon>mdi-{{header.icon.darkmode}}</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" floating app clipped :dark="dark">
            <f-navbar-list></f-navbar-list>
        </v-navigation-drawer>

        <v-main :dark="dark">
            <f-main-title></f-main-title>
            <v-container>
                <f-main-about :dark="dark"></f-main-about>
                <f-main-chips :dark="dark"></f-main-chips>
                <f-contact :dark="dark"></f-contact>
                <f-donate :dark="dark"></f-donate>
                <f-footer></f-footer>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Darkmode from "./assets/darkmode";

import FNavbarList from "./components/NavbarList";
import FMainTitle from "./components/Title";
import FMainAbout from "./components/About";
import FMainChips from "./components/Chips";
import FContact from "./components/Contact";
import FDonate from "./components/Donate";
import FFooter from "./components/Footer";

export default {
    name: "App",

    components: {
        FNavbarList,
        FMainTitle,
        FMainAbout,
        FMainChips,
        FContact,
        FDonate,
        FFooter,
    },

    data: () => ({
        onDarkMode() {},
        offDarkMode() {},
        header: require("./data/header.json"),
        dark: false,
        drawer: false,
    }),

    mounted() {
        Darkmode(this);
    },
};
</script>

<style src="./assets/global.css"></style>