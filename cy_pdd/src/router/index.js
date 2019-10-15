// 引入对应模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Search from '@/pages/Search/Search'
import Chat from '@/pages/Chat/Chat'
import Me from '@/pages/Me/Me'
import Hot from '@/pages/Home/Children/Hot'

// 声明使用
Vue.use(VueRouter)

// 输出路由对象
export default new VueRouter({

  // 配置一级路由
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
