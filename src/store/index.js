import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  // showQRcode(minStore){
  //   minStore.commit('SHOWQRCODE');
  // }
}

const mutations = {
  SHOWQRCODE(state){
    state.isCover = true;
    state.qRCodeStatus = true;
  },
  HIDEQRCODE(state){
    state.isCover = false;
    state.qRCodeStatus = false;
  },
}

const state = {
  isCover: false,
  qRCodeStatus: false
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})