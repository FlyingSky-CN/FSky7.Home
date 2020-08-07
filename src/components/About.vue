<template>
    <v-card class="pt-4" :dark="dark">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="headline">{{title}}</v-list-item-title>
                <v-list-item-subtitle>{{subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
        <v-card-text class="f-text" v-html="text.replace(/\n/g,'<br>')"></v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-{{icon}}</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        data() {
            return require("../data/about.json");
        },
        methods: {
            what() {

            }
        },
        props: {
            dark: {
                type: Boolean,
                required: true
            }
        }
    };
</script>