<template>
    <div class="fs-chips">
        <div class="mdui-chip" v-for="(item, index) in shuffle(tag)" :key="index">
            <span class="mdui-chip-icon">
                <i class="mdui-icon material-icons">{{item.icon}}</i>
            </span>
            <span class="mdui-chip-title">{{item.text}}</span>
        </div>
        <div
            class="mdui-chip"
            v-for="(item, index) in shuffle(language)"
            :key="index"
            :mdui-tooltip="'{content: \''+item.tip+'\'}'"
        >
            <span class="mdui-chip-icon" :style="'background: '+item.color"></span>
            <span class="mdui-chip-title">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tag: require("../../data/chips.json"),
            language: require("../../data/language.json")
        };
    },
    methods: {
        shuffle: function(arr) {
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
};
</script>

<style>
.fs-chips .mdui-chip {
    margin: 4px;
}

.fs-chips {
    margin: 14px -4px 10px;
}
</style>