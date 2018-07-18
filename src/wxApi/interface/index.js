/**
 * Created by lin_yu on 2018/6/22
 */

import promisify from '../../utils/promisify'

const wxInterface = {
  showActionSheet: promisify(wx.showActionSheet),
  showToast: wx.showToast,
  showLoading: wx.showLoading,
  hideLoading: wx.hideLoading,
  switchTab: wx.switchTab
}

export default wxInterface
