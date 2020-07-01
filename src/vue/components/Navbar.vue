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
    import NavbarItem from './NavbarItem.vue';

    export default {
        components: {
            NavbarItem
        },
        data() {
            return {
                navbar: 'fsDrawerL',
                list:
                    [{
                        text: '主页 / Home',
                        data: null,
                        icon: 'gesture',
                        link: 'https://fsky7.com/',
                        color: 'blue'
                    }, {
                        text: '博客 / Blog',
                        data: null,
                        icon: 'public',
                        link: 'https://blog.fsky7.com/',
                        color: 'green'
                    }, {
                        text: '面板 / Dashboard',
                        data: null,
                        icon: 'dashboard',
                        link: 'https://dash.fsky7.com/',
                        color: 'deep-orange'
                    }, {
                        text: '项目 / Projects',
                        data: [{
                            href: 'https://github.com/FlyingSky-CN/MDr',
                            text: 'Typecho theme | MDr'
                        }, {
                            href: 'https://github.com/FlyingSky-CN/initial-fly',
                            text: 'Typecho theme | initial-fly'
                        }, {
                            href: 'https://paperclip.wiki',
                            text: '回形针 PaperClip Fans'
                        }, {
                            href: 'https://for1833.fsky7.com',
                            text: 'For 1833 - 框女'
                        }, {
                            href: 'https://fsky7.com',
                            text: 'FlyingSky\'s Website'
                        }],
                        icon: 'local_library',
                        link: null,
                        color: 'deep-purple'
                    }
                    ]
            }
        }
    }
</script>

<style>
    .mdui-drawer {
        z-index: 4000
    }

    @keyframes fadein-2 {
        0% {
            opacity: 0
        }

        25% {
            opacity: 0;
            transform: translate(-128px, -24px)
        }

        100% {
            opacity: 1
        }
    }

    @media (min-width: 1024px) {
        .mdui-drawer {
            animation: fadein-2 1s ease
        }
    }
</style>