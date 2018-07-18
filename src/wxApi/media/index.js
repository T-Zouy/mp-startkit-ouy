/**
 * media
 *
 * @author lin_yu
 */
import promisify from '../../utils/promisify'

const wxMedia = {
  chooseImage: promisify(wx.chooseImage),
  getImageInfo: promisify(wx.getImageInfo),
  saveImageToPhotosAlbum: promisify(wx.saveImageToPhotosAlbum)
}

export default wxMedia
