<template>
    <div class="fs-donate mdui-card mdui-shadow-0">
        <div class="mdui-card-primary">
            <div class="mdui-card-primary-title">{{title}}</div>
            <div class="mdui-card-primary-subtitle">{{subtitle}}</div>
        </div>
        <div class="mdui-card-content" v-html="text"></div>
        <div class="mdui-card-actions" style="padding: 16px">
            <a class="mdui-btn mdui-ripple fs-afdian" :href="afdian" target="_blank">爱发电 /
                Afdian</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '用爱发电',
                subtitle: '赞助我 / Donate',
                text: '我目前参与的都是些非盈利项目，您可以选择赞助我，各位的支持是我最大的动力。\n除了下方给出的赞助方式，您也可以直接联系我。'.replace(/\n/g, '<br/>'),
                afdian: 'https://afdian.net/@flyingsky'
            }
        }
    }
</script>

<style>
    .fs-donate {
        background: #f7f7f7
    }

    .fs-donate .fs-afdian {
        color: #fff;
        background: linear-gradient(90deg, #946ce6, #7e5fd9)
    }
</style>