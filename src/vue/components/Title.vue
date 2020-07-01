<template>
    <div class="fs-title mdui-valign">
        <div class="fs-title-text mdui-hidden-xs">
            <div class="mdui-typo-display-3">{{name}}</div>
            <br />
            <div class="mdui-typo-subheading-opacity">{{slogan}}</div>
        </div>
        <div class="fs-title-text mdui-hidden-sm-up mdui-center">
            <i class="mdui-icon material-icons" id="fs-title-icon">{{icon}}</i>
            <br />
            <div class="mdui-typo-display-3">{{name}}</div>
            <br />
            <div class="mdui-typo-subheading-opacity">{{slogan}}</div>
        </div>
        <div class="fs-title-icon mdui-hidden-xs">
            <i class="mdui-icon material-icons">{{icon}}</i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'FlyingSky',
                slogan: '来自 2.5 次元的咸鱼一枚',
                icon: 'gesture'
            }
        }
    }
</script>

<style>
    .fs-title {
        margin-top: -56px;
        padding-top: 14px;
        height: 100vh;
        position: relative;
        margin-bottom: 8px
    }

    @media (max-width: 959px) and (orientation: landscape) {
        .fs-title {
            margin-top: -48px;
            padding-top: 12px
        }
    }

    @media (min-width: 600px) {
        .fs-title {
            margin-top: -64px;
            padding-top: 16px
        }
    }

    .fs-title-text {
        padding: 32px
    }

    .fs-title-text .mdui-icon {
        margin-bottom: 32px;
        font-size: 192px;
        opacity: .05
    }

    .fs-title-icon {
        position: absolute;
        right: 24px
    }

    .fs-title-icon .mdui-icon {
        font-size: 256px;
        opacity: .05
    }

    .fs-title:hover .mdui-icon {
        transform: rotate(360deg);
        transition: 0.25s
    }

    .fs-title-text.mdui-hidden-sm-up {
        text-align: center;
    }
</style>