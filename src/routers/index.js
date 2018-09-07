/**
 * Created by lin_yu on 2018/9/4
 */
module.exports = [{
  path: 'pages/counter/index',
  config: {
    navigationBarTitleText: '计数器'
    // disableScroll: true
  }
}, {
  path: 'pages/main/index',
  config: {
    navigationBarTitleText: '主頁',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark',
    disableScroll: true
  }
}, {
  path: 'pages/logs/index',
  config: {
    navigationBarTitleText: '日志'
  }
}, {
  path: 'pages/not-tab/index',
  config: {
    navigationBarTitleText: '非tab页面测试'
  }
}]
