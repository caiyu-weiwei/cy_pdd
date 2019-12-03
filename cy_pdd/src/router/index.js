// 引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Search from '@/pages/Search/Search'
import Chat from '@/pages/Chat/Chat'
import Me from '@/pages/Me/Me'
import Login from '@/pages/Login/Login'
import MeSetting from '@/pages/Me/MeSetting'
import MeDetail from '@/pages/Me/MeDetail'


import Hot from '@/pages/Home/Children/Hot/Hot'
import Dress from '@/pages/Home/Children/Dress'
import Box from '@/pages/Home/Children/Box'
import Mbaby from '@/pages/Home/Children/Mbaby'
import General from '@/pages/Home/Children/General'
import Food from '@/pages/Home/Children/Food'
import Shirt from '@/pages/Home/Children/Shirt'
import Man from '@/pages/Home/Children/Man'
import Ele from '@/pages/Home/Children/Ele'


// 声明使用
Vue.use(VueRouter)

// 输出路由对象
export default new VueRouter({

  // 配置一级路由
  routes: [
    {
      path: '/home',
      component: Home,

      // 配置二级路由
      children: [
        {path: 'hot', component: Hot,meta: {
          showBottomTabBar: true
        }},
        {path: 'dress', component: Dress},
        {path: 'box', component: Box},
        {path: 'mbaby', component: Mbaby},
        {path: 'general', component: General},
        {path: 'food', component: Food},
        {path: 'shirt', component: Shirt},
        {path: 'man', component: Man},
        {path: 'ele', component: Ele},
        {path: '/home', redirect: '/home/hot'},
      ]
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/chat',
      component: Chat,
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/me',
      component: Me,
      meta: {
        showBottomTabBar: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showBottomTabBar: false
      }
    },
    {
      path: '/setting',
      component: MeSetting,
      meta: {
        showBottomTabBar: false
      }
    },
    {
      path: '/meDetail',
      component: MeDetail,
      meta: {
        showBottomTabBar: false
      }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
