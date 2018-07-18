/**
 * Created by lin_yu on 2018/6/22
 */
import qiniu from '../../utils/qiniuUploader'
import uploadApi from '../../api/upload'
import UPLOAD from '../../constants/upload.config'
import promisify from '../../utils/promisify'

const wxNetwork = {
  // uploadFile: promisify(qiniu.upload)
  uploadFile: function (filePath, options) {
    return new Promise((resolve, reject) => {
      qiniu.upload(filePath, res => {
        resolve(res)
      }, error => {
        reject(error)
      }, options)
    })
  },
  downloadFile: promisify(wx.downloadFile),
  uploadImg: async function (filePath) {
    let res = await uploadApi.getToken()
    if (res.status.code === 0) {
      let uploadRes = await wxNetwork.uploadFile(filePath, {
        region: 'ECN',
        key: filePath.split('//')[1],
        uptoken: res.data
      })
      if (uploadRes.hasOwnProperty('imageURL')) {
        return `${UPLOAD.domain}${uploadRes.imageURL}`
      }
      return false
    } else {
      console.log(res.status.msg)
      return false
    }
  }
}

export default wxNetwork
