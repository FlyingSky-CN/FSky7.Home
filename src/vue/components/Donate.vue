<template>
    <div class="fs-donate mdui-card mdui-shadow-0">
        <div class="mdui-card-primary">
            <div class="mdui-card-primary-title">{{title}}</div>
            <div class="mdui-card-primary-subtitle">{{subtitle}}</div>
        </div>
        <div class="mdui-card-content" v-html="text.replace(/\n/g,'<br/>')"></div>
        <div class="mdui-card-actions" style="padding: 16px">
            <a class="mdui-btn mdui-ripple fs-afdian" :href="afdian" target="_blank">
                爱发电 /
                Afdian
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return require("../../data/donate.json");
    }
};
</script>

<style>
.fs-donate {
    background: #f7f7f7;
}

.fs-donate .fs-afdian {
    color: #fff;
    background: linear-gradient(90deg, #946ce6, #7e5fd9);
}
</style>