import Vue from 'vue'
import App from './App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()
