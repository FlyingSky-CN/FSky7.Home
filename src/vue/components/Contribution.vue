<template>
    <div class="mdui-card fs-git">
        <div class="mdui-card-header">
            <div class="mdui-card-header-title">{{title}}</div>
            <div class="mdui-card-header-subtitle">{{subtitle}}</div>
        </div>
        <div class="fs-img">
            <img class="mdui-center" :src="src" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'GitHub',
                subtitle: 'Contribution',
                src: 'https://api.fsky7.com/GitHub/getChart'
            }
        }
    }
</script>

<style>
    .fs-git {
        margin: 16px 0px;
        direction: rtl
    }

    .fs-git .fs-img {
        margin: 0px 8px;
        padding-bottom: 4px;
        overflow-x: scroll;
        min-height: 113px
    }
</style>