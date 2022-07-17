<template>
    <v-app :class="dark ? 'f-dark' : ''">
        <v-app-bar
            app
            elevate-on-scroll
            clipped-left
            style="transition: 0s ease background-color, 280ms cubic-bezier(0.4, 0, 0.2, 1) box-shadow;"
            :dark="dark"
            :color="dark ? '#121212' : '#fff'"
        >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>{{ header.title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="dark ? offDarkMode() : onDarkMode()">
                <v-icon>mdi-{{ header.icon.darkmode }}</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" floating app clipped :dark="dark">
            <f-navbar-list></f-navbar-list>
        </v-navigation-drawer>

        <v-main :dark="dark">
            <f-main-title></f-main-title>
            <v-container class="f-container">
                <f-main-about :dark="dark"></f-main-about>
                <f-main-chips :dark="dark"></f-main-chips>
                <f-contact :dark="dark"></f-contact>
                <f-main-site :dark="dark"></f-main-site>
                <f-donate :dark="dark"></f-donate>
                <f-footer :dark="dark"></f-footer>
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
import FMainSite from "./components/Site";
import FDonate from "./components/Donate";
import FFooter from "./components/Footer";

export default {
    name: "App",

    metaInfo: require('./data/meta.json'),

    components: {
        FNavbarList,
        FMainTitle,
        FMainAbout,
        FMainChips,
        FMainSite,
        FContact,
        FDonate,
        FFooter,
    },

    data: () => ({
        onDarkMode() {},
        offDarkMode() {},
        header: require("./data/header.json"),
        dark: false,
        drawer: null,
    }),

    mounted() {
        Darkmode(this);
    },
};
</script>

<style src="./assets/global.css"></style>