const state = {
  queueConf: '1',
  oneQrcode: '2'
}

const actions = {
  setQueueConf ({ commit }, conf) {
    commit('setQueueConf', conf)
  },
  setOneQrcode ({ commit }, conf) {
    commit('setOneQrcode', conf)
  }
}

const mutations = {
  setQueueConf (state, conf) {
    state.queueConf = conf
  },
  setOneQrcode (state, conf) {
    state.oneQrcode = conf
  }
}

export default {
  state,
  actions,
  mutations
}
