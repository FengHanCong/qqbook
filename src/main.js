// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'
// 导入MUI的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import store from './store' // 引入store文件
import Muse from './muse-ui.config'
// 导入wcSwiper
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
//
import {Loading, Tabbar, TabbarItem, NavBar, Icon, PullRefresh, Lazyload, Search, Tab, Tabs, Button} from 'vant'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Muse)
Vue.use(wcSwiper)
Vue.use(Loading)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Lazyload)
Vue.use(PullRefresh)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

router.push('/selected')
