/**
 * Created by lin_yu on 2018/6/27
 */
import promisify from '../../utils/promisify'

const wxDevice = {
  getSystemInfo: promisify(wx.getSystemInfo),
  getSystemInfoSync: wx.getSystemInfoSync,
  getStorageSync: wx.getStorageSync
}

export default wxDevice
