<template>
    <div class="mdui-card">
        <div class="mdui-card-primary">
            <div class="mdui-card-primary-title">{{title}}</div>
            <div class="mdui-card-primary-subtitle">{{subtitle}}</div>
        </div>
        <div class="mdui-card-content" v-html="text"></div>
        <div class="mdui-card-actions">
            <button class="mdui-btn mdui-btn-icon mdui-float-right"><i
                    class="mdui-icon material-icons">{{icon}}</i></button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '关于我',
                subtitle: 'About ME',
                text: '您好，这里是 FlyingSky\n普通中学生一枚\n对，很垃圾，菜爆了\n仰望各界 dalao 中....\n(自己钻进垃圾桶.bmp)\n认识一下？'.replace(/\n/g,'<br>'),
                icon: 'beach_access'
            }
        }
    }
</script>