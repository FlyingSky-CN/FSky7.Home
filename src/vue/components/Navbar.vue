<template>
    <nav class="mdui-drawer" :id="navbar">
        <div class="mdui-appbar mdui-hidden-md-up mdui-shadow-0">
            <div class="mdui-toolbar"></div>
        </div>
        <ul class="mdui-list">
            <NavbarItem :item="item" v-for="(item, index) in list" :key="index"></NavbarItem>
        </ul>
    </nav>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";

export default {
    components: {
        NavbarItem
    },
    data() {
        return {
            navbar: "fsDrawerL",
            list: require("../../data/navbar.json")
        };
    }
};
</script>

<style>
.mdui-drawer {
    z-index: 4000;
}

@keyframes fadein-2 {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 0;
        transform: translate(-128px, -24px);
    }

    100% {
        opacity: 1;
    }
}

@media (min-width: 1024px) {
    .mdui-drawer {
        animation: fadein-2 1s ease;
    }
}
</style>