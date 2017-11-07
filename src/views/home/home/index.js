import Vue from 'vue'
import App from './indexApp.vue'
require ('./assets/css/index.less');

new Vue({
    render: h => h(App)
}).$mount('#app')
