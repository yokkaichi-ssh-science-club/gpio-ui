module.exports=require("./home.html")({
  data(){
    return {
      loading:false
    }
  },
  computed:{
    
  },
  methods:{
    claimSession(){
      (async ()=>{
        this.loading=true
        await (new Promise(r=>{
          setTimeout(r,3000)
        }))
        if(Math.random()>0.1){
          this.$store.commit('navOptions', {
            animation: "lift-ios",
            callback: () => this.$store.commit('navOptions', {})
          });
          this.$store.commit("push",require("./session"))
        }
        this.loading=false
      })().catch(e=>{
        this.$store.commit("setError",e)
      })
    }
  },
  mounted(){
    
  }
})
