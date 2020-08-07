import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

document.title = 'FlyingSky\'s Home'

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app')
