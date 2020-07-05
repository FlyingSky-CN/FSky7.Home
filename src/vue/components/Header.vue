<template>
    <header class="mdui-appbar mdui-appbar-fixed" style="background: #fff;z-index:5000;">
        <div class="mdui-toolbar">
            <a class="mdui-btn mdui-btn-icon" :mdui-drawer="'{target:\'#'+navbar+'\'}'">
                <i class="mdui-icon material-icons">{{icon.navbar}}</i>
            </a>
            <a :href="href" class="mdui-typo-title">{{title}}</a>
            <div class="mdui-toolbar-spacer"></div>
            <a class="mdui-btn mdui-btn-icon" @click="switchDarkMode">
                <i class="mdui-icon material-icons">{{icon.darkmode}}</i>
            </a>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return require('../../data/header.json')
        },
        methods: {
            switchDarkMode() {
                window.switchDarkMode()
            }
        }
    }
</script>

<style>
    @keyframes fadein-1 {
        0% {
            opacity: 0
        }

        25% {
            opacity: 0;
            transform: translateY(-24px)
        }

        100% {
            opacity: 1
        }
    }

    .mdui-appbar {
        animation: fadein-1 1s ease
    }
</style>