<template>
    <v-list-item :href="item.link" v-if="item.data === null">
        <v-list-item-action>
            <v-icon :color="item.color">mdi-{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>{{item.text}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    <v-list-group v-else value="true">
        <template v-slot:activator>
            <v-list-item-action>
                <v-icon :color="item.color">mdi-{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{item.text}}</v-list-item-title>
            </v-list-item-content>
        </template>
        <v-list-item :href="li.href" v-for="(li, index) in item.data" :key="index" dense>
            <v-list-item-action>
                <v-icon>mdi-{{li.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{li.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list-group>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    };
</script>