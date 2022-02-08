<template>
    <div class="my-12 px-4 text-caption" style="opacity: 0.75">
        <b>FlyingSky's Website</b>
        <br />Created by FlyingSky with ♥ since 2017.
        <br />
        <br />&copy; 2017-{{ year() }} FlyingSky.
        <v-dialog v-model="dialog" max-width="768px" :dark="dark">
            <template v-slot:activator="{ on, attrs }">
                <a v-bind="attrs" v-on="on"> 隐私政策 Privacy Policy. </a>
            </template>
            <v-card :dark="dark">
                <f-privacy-policy></f-privacy-policy>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import FPrivacyPolicy from "./PrivacyPolicy";

export default {
    components: {
        FPrivacyPolicy,
    },

    data: () => ({
        dialog: false,
    }),

    props: {
        dark: {
            type: Boolean,
            required: true,
        },
    },

    methods: {
        year() {
            return new Date().getFullYear();
        },
    },
};
</script>