import Vue from 'vue';
import App from './vue/App.vue';
import './style/common.css';

console.log("\n %c FlyingSky\'s Home %c Version 18 (20200701) %c \n",
    "color:#fff;background:#6cf;padding:5px 0;border: 1px solid #6cf;",
    "color:#6cf;background:none;padding:5px 0;border: 1px solid #6cf;", "");

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})

mdui.mutation();
