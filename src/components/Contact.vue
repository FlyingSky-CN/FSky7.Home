<template>
    <v-card class="pt-4 mb-4" :dark="dark" elevation="0">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">{{title}}</v-list-item-title>
                <v-list-item-subtitle>{{subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <div class="px-4 pb-2">
            <v-row>
                <v-col cols="6" md="3" v-for="(item, i) in data" :key="i">
                    <v-card
                        outlined
                        elevation="0"
                        style="background: none; opacity: .8"
                        :dark="dark"
                        :href="item.href"
                    >
                        <v-card-title class="headline" v-text="item.key"></v-card-title>
                        <v-card-subtitle v-text="item.value"></v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-card>
</template>

<script>
export default {
    data: () => require("../data/contact.json"),
    props: {
        dark: {
            type: Boolean,
            required: true,
        },
    },
};
</script>