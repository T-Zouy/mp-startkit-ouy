/**
 * Created by lin_yu on 2018/6/29
 */
import promisify from '../../utils/promisify'

const wxOpen = {
  getSetting: promisify(wx.getSetting),
  openSetting: promisify(wx.openSetting),
  authorize: promisify(wx.authorize),
  login: promisify(wx.login)
}

export default wxOpen
