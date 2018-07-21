module.exports=require("./customBar.html")({
  data(){
    return {}
  },
  methods:{
    
  },
  store:require("../store.js"),
  computed:{
    mod(){
      return this.modifier
    }
  },
  props:["title","modifier","backLabel"]
})
