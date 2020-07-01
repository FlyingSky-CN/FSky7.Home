<template>
    <div class="fs-contact">
        <div class="mdui-list-item fs-background">
            <div class="mdui-list-item-content">{{title}}</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons">{{icon}}</i>
        </div>
        <ul class="mdui-list mdui-list-dense mdui-row-sm-2">
            <a :href="item.href" v-for="(item, index) in data" :key="index">
                <li class="mdui-list-item mdui-ripple mdui-col">
                    <div class="mdui-list-item-content">
                        <div class="mdui-list-item-title mdui-list-item-one-line">{{item.key}}</div>
                        <div class="mdui-list-item-text mdui-list-item-one-line">{{item.value}}</div>
                    </div>
                </li>
            </a>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '联系方式 / Contact',
                icon: 'account_circle',
                data: [{
                    href: 'mailto:me@fsky7.com',
                    key: 'E-mail',
                    value: 'me@fsky7.com'
                }, {
                    href: 'https://t.me/flyingsky666',
                    key: 'Telegram',
                    value: '@FlyingSky666'
                }, {
                    href: 'https://github.com/FlyingSky-CN',
                    key: 'GitHub',
                    value: 'FlyingSky-CN'
                }, {
                    href: 'https://weibo.com/flyingsky7',
                    key: 'Weibo',
                    value: 'FlyingSky'
                }]
            }
        }
    }
</script>

<style>
    .fs-contact {
        margin: 13px 0px 16px
    }

    .fs-contact .mdui-list {
        padding: 0px
    }

    .fs-contact .fs-background {
        background-color: rgba(0, 0, 0, .05)
    }
</style>