import Vue from 'vue'
import App from './App'
import store from '@/store'
import MpvueRouterPatch from 'mpvue-router-patch'

import '@/assets/css/app.css'

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch)
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['`pages/main/index'],
    window: {
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '海草云',
      backgroundTextStyle: 'light',
      enablePullDownRefresh: false,
      onReachBottomDistance: 50
    },
    tabBar: {
      color: '#9B9B9B',
      selectedColor: '#37B35D',
      borderStyle: '#D4D4D4',
      backgroundColor: '#FAFAFA',
      list: [
        {
          text: '计数器',
          pagePath: 'pages/counter/index',
          iconPath: 'static/assets/sign-up.png',
          selectedIconPath: 'static/assets/sign-up-active.png'
        },
        {
          text: '日志',
          pagePath: 'pages/logs/index',
          iconPath: 'static/assets/create.png',
          selectedIconPath: 'static/assets/create-active.png'
        },
        {
          text: '主页',
          pagePath: 'pages/main/index',
          iconPath: 'static/assets/mine.png',
          selectedIconPath: 'static/assets/mine-active.png'
        }
      ]
    }
  }
}
