/**
 * element
 *
 * @author lin_yu
 */

const wxElement = {
  getElementBound: function (e) {
    return new Promise(function (resolve, reject) {
      wx.createSelectorQuery().select(e).boundingClientRect(function (e) {
        resolve(e)
      }).exec()
    })
  }
}

export default wxElement
