<template>
    <v-card class="pt-4" :dark="dark" elevation="0">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">关于我</v-list-item-title>
                <v-list-item-subtitle>About ME</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text class="f-text">
            您好，这里是 FlyingSky
            <br />普通中学生一枚
            <br />对，很垃圾，菜爆了
            <br />仰望各界 dalao 中....
            <br />(自己钻进垃圾桶.bmp)
            <br />认识一下？
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-tower-beach</v-icon>
            </v-btn>
        </v-card-actions>
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