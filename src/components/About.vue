<template>
    <v-card class="pt-4" :dark="dark" elevation="0" style="background: none;">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">关于我</v-list-item-title>
                <v-list-item-subtitle>About ME</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text class="f-text" style="max-width: 400px;">
            这里是 FlyingSky (飞天)
            <br />坐标地球 // 中学生 // 喵呜
            <br /><br />
            喜欢各种折腾，会敲代码，会剪视频，偶尔试着做些音乐。
            虽然没有好的设备，但还是喜欢玩摄影。
            仰望各界大佬。
            认识一下？
            希望能和你一起，理解这世界。
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: {
            dark: {
                type: Boolean,
                required: true,
            },
        },
    };
</script>