const Vuex = require("vuex")
module.exports = new Vuex.Store({
  state: {
    openSide:false,
    pageStack:[require("./component/hello")],
    error:null,
    navOptions:{}
  },
  mutations: {
    openSide(state,v) {
      state.openSide=v;
    },
    push(s,p){
      s.pageStack.push(p)
    },
    pop(s){
      s.pageStack.pop()
    },
    replace(s,p){
      s.pageStack=[p]
    },
    setError(s,e){
      s.error=e
    },
    navOptions(s,o){
      s.navOptions=o
    }
  }
})
