<template>
    <v-row class="mx-2 mt-n2" no-gutters style="opacity: 0.9">
        <v-col cols="6" md="3" v-for="(item, i) in data" :key="i">
            <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                    <v-card
                        elevation="0"
                        class="mx-2 mb-4"
                        v-bind="attrs"
                        v-on="on"
                        dark
                        :style="'background:' + item.color"
                        :href="item.href"
                        :rel="item.key == 'Mastodon' ? 'me' : ''"
                    >
                        <v-card-title>
                            <span
                                class="title font-weight-light"
                                v-text="item.key"
                            />
                        </v-card-title>
                    </v-card>
                </template>
                <span v-text="item.value" />
            </v-tooltip>
        </v-col>
    </v-row>
</template>

<style>

</style>

<script>
export default {
    data: () => require("../data/site.json"),
    props: {
        dark: {
            type: Boolean,
            required: true,
        },
    },
};
</script>