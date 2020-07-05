<template>
    <div class="mdui-card">
        <div class="mdui-card-primary">
            <div class="mdui-card-primary-title">{{title}}</div>
            <div class="mdui-card-primary-subtitle">{{subtitle}}</div>
        </div>
        <div class="mdui-card-content" v-html="text.replace(/\n/g,'<br>')"></div>
        <div class="mdui-card-actions">
            <button class="mdui-btn mdui-btn-icon mdui-float-right" @click="what">
                <i class="mdui-icon material-icons">{{icon}}</i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return require("../../data/about.json");
    },
    methods: {
        what() {
            mdui.JQ("#app").css("display", "none");
            setTimeout(() => {
                mdui.JQ("#app").css("display", "block");
            }, 1000);
        }
    }
};
</script>