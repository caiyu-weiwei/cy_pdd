// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { 
  Indicator, 
  Toast, 
  Actionsheet,
  DatetimePicker 
 } from 'mint-ui'

// 引入路由器
import router from './router'

// 引入LyTab
import LyTab from 'ly-tab'

// 引入store
import store from './store'

// 引入字体图标文件
import 'common/css/style.css'

// 应用相应组件
Vue.use(LyTab)
Vue.use(Indicator)
Vue.use(Toast)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(DatetimePicker.name, DatetimePicker)  

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
