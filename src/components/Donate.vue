<template>
    <v-card class="pt-4" :dark="dark" elevation="0" style="background: none">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">赞助我</v-list-item-title>
                <v-list-item-subtitle>Donate</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text>
            我目前参与的都是些非盈利项目，你可以选择赞助我，你的支持是我最大的动力。
            <br />除了下方给出的赞助方式，你也可以直接联系我。
        </v-card-text>
        <v-card-actions>
            <v-btn
                class="ma-2"
                elevation="0"
                :style="'background: ' + color + '; color: white;'"
                :href="link"
                v-text="text"
            />
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        color: "#7d61cd",
        link: "https://afdian.net/@flyingsky",
        text: "爱发电",
    }),
    props: {
        dark: {
            type: Boolean,
            required: true,
        },
    },
};
</script>