/**
 * Created by lin_yu on 2018/9/4
 */
import request from '../utils/request'

export default {
  login: (query) => request.post('/index.php/api/wxSignUp/onLogin', query)
}
