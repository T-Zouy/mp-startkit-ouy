function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function getLoginQuery () {
  return new Promise((resolve) => {
    wx.getUserInfo({
      success: (res) => {
        const userInfo = res.userInfo
        const encryptedData = res.encryptedData
        const iv = res.iv
        wx.login({
          success: (loginMsg) => {
            let query
            if (loginMsg.code) {
              query = {
                code: loginMsg.code,
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl,
                gender: userInfo.gender,
                city: userInfo.city,
                province: userInfo.province,
                country: userInfo.country,
                scene: '',
                encryptedData,
                iv
              }
              resolve(query)
            } else {
              resolve({})
            }
          }
        })
      }
    })
  })
}

export default {
  formatNumber,
  formatTime,
  getLoginQuery
}
