// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入路由器
import router from './router'

// 引入LyTab
import LyTab from 'ly-tab'

// 应用相应组件
Vue.use(LyTab)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
