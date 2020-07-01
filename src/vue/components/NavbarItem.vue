<template>
    <a :href="item.link" v-if="item.data === null">
        <li class="mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons"
                :class="'mdui-text-color-'+item.color">{{item.icon}}</i>
            <div class="mdui-list-item-content">{{item.text}}</div>
        </li>
    </a>
    <li class="mdui-collapse-item mdui-collapse-item-open" v-else>
        <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
            <i class="mdui-list-item-icon mdui-icon material-icons"
                :class="'mdui-text-color-'+item.color">{{item.icon}}</i>
            <div class="mdui-list-item-content">{{item.text}}</div>
            <i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
        </div>
        <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">
            <a :href="li.href" v-for="(li, index) in item.data" :key="index">
                <li class="mdui-list-item mdui-ripple">{{li.text}}</li>
            </a>
        </ul>
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true
            }
        }
    }
</script>