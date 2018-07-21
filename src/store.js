const Vuex = require("vuex")
module.exports = new Vuex.Store({
  state: {
    openSide:false,
    pageStack:[require("./component/hello")]
  },
  mutations: {
    openSide(state,v) {
      state.openSide=v;
    },
    push(s,p){
      s.pageStack.push(p)
    }
  }
})
