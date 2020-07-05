<template>
    <div id="app">
        <Header></Header>
        <Navbar></Navbar>
        <main id="content" class="mdui-center mdui-container">
            <Title></Title>
            <About></About>
            <Chips></Chips>
            <Contact></Contact>
            <Contribution></Contribution>
            <Donate></Donate>
            <Footer></Footer>
        </main>
    </div>
</template>

<script>
import Contribution from "./components/Contribution.vue";
import Contact from "./components/Contact.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Donate from "./components/Donate.vue";
import Footer from "./components/Footer.vue";
import Title from "./components/Title.vue";
import About from "./components/About.vue";
import Chips from "./components/Chips.vue";

export default {
    components: {
        Header,
        Navbar,
        Title,
        About,
        Chips,
        Contact,
        Contribution,
        Donate,
        Footer
    }
};
</script>

<style>
.mdui-container {
    animation: fadein-0 1.5s ease;
}

#app {
    animation: fadein-0 0.5s ease;
}

@keyframes fadein-0 {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 0;
        transform: translateX(-12px);
    }

    100% {
        opacity: 1;
    }
}
</style>