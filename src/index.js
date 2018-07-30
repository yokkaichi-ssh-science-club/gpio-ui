require('onsenui/css/onsenui.min.css')
require('./scss/onsen-css-components.custom.min.css')
require('./scss/index.scss')
require('babel-polyfill')
const Vue = require("vue/dist/vue.runtime.min")
const VueOnsen = require('vue-onsenui')
const VueI18n=require("vue-i18n")
const Vuex = require("vuex")

Vue.use(VueOnsen)
Vue.use(Vuex)
Vue.use(VueI18n)

Vue.component('custom-bar', require("./component/customBar"))

exports.vm= new Vue({
  el:"#app",
  render(h){
    return h("navigator")
  },
  data(){
    return {}
  },
  components:{
    navigator:require("./component/navigator.js")
  },
  store:require("./store.js"),
  beforeMount() {
    this.$ons.enableAutoStatusBarFill()
    const html = document.documentElement;
    if (this.$ons.platform.isIPhoneX()) {
      if(window.cordova){
        html.setAttribute('onsflag-iphonex-portrait', '');
      }
      html.setAttribute('onsflag-iphonex-landscape', '');
    }
  },
  i18n: new VueI18n.default({
    locale: 'ja', // set locale
    messages:require("./i18n.json"), // set locale messages
  })
})
