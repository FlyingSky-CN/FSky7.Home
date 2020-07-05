<template>
    <div class="fs-foot mdui-typo" v-html="data.replace('{{version}}', version)"></div>
</template>

<script>
    export default {
        data() {
            return require('../../data/footer.json')
        }
    }
</script>

<style>
    .fs-foot {
        padding: 32px
    }
</style>