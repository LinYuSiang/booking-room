import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/views/home'
import Roominfo from '@/components/views/roominfo'
Vue.use(VueRouter)

const router = new  VueRouter({
    // mode:'history',
    routes: [
        {
            path: '/index', //自訂路徑
            name: 'index', //設定名稱
            component: HelloWorld //選擇要對應的元件
        },
        {
            path: '/roominfo', //自訂路徑
            name: 'roominfo', //設定名稱
            component: Roominfo //選擇要對應的元件
        },
        {
            path: '/booking-room', //自訂路徑
            name: 'home', //設定名稱
            component: home //選擇要對應的元件
        }
    ]
});

export default router