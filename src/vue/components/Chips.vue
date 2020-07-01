<template>
    <div class="fs-chips">
        <div class="mdui-chip" v-for="(item, index) in shuffle(data)" :key="index">
            <span class="mdui-chip-icon"><i class="mdui-icon material-icons">{{item.icon}}</i></span>
            <span class="mdui-chip-title">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                    icon: 'person',
                    text: 'INFP'
                }, {
                    icon: 'timeline',
                    text: '拾光者'
                }, {
                    icon: 'code',
                    text: 'PHPer'
                }, {
                    icon: 'all_inclusive',
                    text: '白夜梦想家'
                }, {
                    icon: 'bubble_chart',
                    text: 'JK & DK'
                }, {
                    icon: 'extension',
                    text: '解谜玩家'
                }]
            }
        },
        methods: {
            shuffle: function (arr) {
                var len = arr.length;
                for (var i = 0; i < len - 1; i++) {
                    var index = parseInt(Math.random() * (len - i));
                    var temp = arr[index];
                    arr[index] = arr[len - i - 1];
                    arr[len - i - 1] = temp;
                }
                return arr;
            }
        }
    }
</script>

<style>
    .fs-chips .mdui-chip {
        margin: 4px
    }

    .fs-chips {
        margin: 14px -4px 10px
    }
</style>