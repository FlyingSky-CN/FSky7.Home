<template>
    <v-container class="f-home align-center mt-n16" style="height: 100vh">
        <div class="d-sm-none text-center f-title" style="width: 100%">
            <div class="f-icon-center">
                <v-icon>mdi-{{ icon }}</v-icon>
            </div>
            <div class="text-h3">{{ name }}</div>
            <br />
            <div class="test-subtitle-1">{{ slogan }}</div>
        </div>
        <div class="d-none d-sm-block f-title">
            <div class="text-h3">{{ name }}</div>
            <br />
            <div class="test-subtitle-1">{{ slogan }}</div>
        </div>
        <div class="d-none d-sm-block f-icon">
            <v-icon>mdi-{{ icon }}</v-icon>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return require("../data/title.json");
    },
};
</script>

<style>
.f-home {
    position: relative;
    display: flex;
}

.f-home .f-title {
    padding: 32px;
}

.f-home .f-icon {
    position: absolute;
    right: 32px;
}

.f-home:hover .f-icon {
    transform: rotate(360deg);
    transition: 0.25s;
}

.f-home .v-icon {
    font-size: 256px;
    opacity: 0.1;
    color: #000;
}

.f-dark .f-home .v-icon {
    color: #fff;
}
</style>