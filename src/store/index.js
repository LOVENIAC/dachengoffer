import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  // showQRcode(minStore){
  //   minStore.commit('SHOWQRCODE');
  // }
}

const mutations = {
  HIDECOVER(state){
    state.isCover = false;
    state.qRCodeStatus = false;
    state.dialogStatus = false;
  },
  SHOWQRCODE(state){
    state.isCover = true;
    state.qRCodeStatus = true;
  },
  HIDEQRCODE(state){
    state.isCover = false;
    state.qRCodeStatus = false;
  },
  POPUPS(state){
    state.isCover = true;
    state.dialogStatus = true;
  },
  POPDOWNS(state){
    state.isCover = false;
    state.dialogStatus = false;
  }
}

const state = {
  isCover: false,
  qRCodeStatus: false,
  dialogStatus: false
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})