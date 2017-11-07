

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import Index from './components/index.vue'
import Order from './components/order.vue'
import orderDetail from './components/orderDetail.vue'

const routes = [
    { path: '/', component: App ,
        children:[
            {path:'index',component:Index},//个人中心
            {path:'order',component:Order, //订单列表
                children:[
                    {path:'detail',component:orderDetail},//订单详情
                ]
            },

        ]
    },

     // {path:'*',redirect:'/index'}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
})

new Vue({
    router: router
}).$mount('#app')
