import wx from '../utils/wx'
import Fly from 'flyio'
import NO_LOADING_LIST from '../constants/fetch-no-loading'

const request = new Fly()

request.config.timeout = 10 * 1000
request.config.baseURL = process.env.BASE_URL

request.interceptors.request.use((request) => {
  const isShowLoading = NO_LOADING_LIST.every(item => {
    return request.url.indexOf(item) === -1
  })
  if (isShowLoading) {
    wx.showLoading({ title: '拼命加载中...' })
  }
  return request
})

request.interceptors.response.use(
  (response, promise) => {
    wx.hideLoading()
    return promise.resolve(response.data)
  }, (err, promise) => {
    wx.hideLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)

export default request
