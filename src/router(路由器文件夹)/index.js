import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views(路由组件文件夹)/Msite(首页)/Msite.vue'
import Order from '../views(路由组件文件夹)/Order(订单页)/Order.vue'
import Profile from '../views(路由组件文件夹)/Profile(个人主页)/Profile.vue'
import Search from '../views(路由组件文件夹)/Search(搜索页)/Search.vue'
import Login from '../views(路由组件文件夹)/Login/Login.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {path:'/msite',
        component:Msite,
        meta:{
            isShowFooter:true
        }
    },
        {path:'/order',
        component:Order,
        meta:{
            isShowFooter:true
        }
    },
        {path:'/profile',
        component:Profile,
        meta:{
            isShowFooter:true
        }
    },
        {path:'/search',
        component:Search,
        meta:{
            isShowFooter:true
        }
    },
        {path:'/login',
        component:Login,
        
    },
        //重定向，选择一个首页
        {path:'/',redirect:'/msite'}
    ]
})