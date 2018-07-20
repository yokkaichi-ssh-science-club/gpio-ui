const Vuex = require("vuex")
module.exports = new Vuex.Store({
  state: {
    openSide:false
  },
  mutations: {
    openSide(state,v) {
      state.openSide=v;
    },
  }
})
