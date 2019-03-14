/*入口js*/
/*App.vue由main.js渲染*/
import Vue from 'vue'
import App from './App.vue'
import router from './router(路由器文件夹)'
new Vue({
    el:'#app',
    render:h=>h(App),
    router
})