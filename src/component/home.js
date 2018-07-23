const socket=require("../socket.js")
module.exports=require("./home.html")({
  data(){
    return {
      loading:false,
      error:false
    }
  },
  computed:{
    
  },
  methods:{
    async claimSession(){
      this.loading=true
      try{
        await socket.claimSession()
        this.$store.commit('navOptions', {
          animation: "lift-ios",
          callback: () => this.$store.commit('navOptions', {})
        });
        this.$store.commit("push",require("./session"))
      }catch(e){
        this.error=true
      }
      this.loading=false
    },
    otherEx(){
      this.$store.commit("push",require("./otherEx"))
    }
  },
  mounted(){
    
  }
})
