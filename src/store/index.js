/**
 * Created by lin_yu on 2018/9/4
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mine from './modules/mine'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mine
  }
})

export default store
