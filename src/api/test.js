/**
 * Created by lin_yu on 2018/7/18
 */

import request from '../utils/request'

const testApi = {
  getPosterDetail: (id) => request.get('/main.php/api/wxSignUp/posterDetail', {
    id
  })
}

export default testApi
