const socket=require("../socket")
module.exports=require("./hello.html")({
  data(){
    return {
    }
  },
  computed:{
    
  },
  methods:{
    tutorial(){
      this.$store.commit("push",{
        extends:require("./tutorial"),
        onsNavigatorProps:{
          itemName:"gravity",
          goNext:require("./home")
        }
      })

      socket.connect().catch(e=>{
        return
      })
    },
    goToJapanese(){
      location.href="../ja/";
    },
    goToEnglish(){
      location.href="../en/";
    }
  },
  mounted(){
    
  }
})
