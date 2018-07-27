const socket=require("../socket")
module.exports=require("./hello.html")({
  data(){
    return {
    }
  },
  computed:{
    
  },
  methods:{
    async tutorial(){
      //await socket.connect()
      this.$store.commit("push",{
        extends:require("./tutorial"),
        onsNavigatorProps:{
          itemName:"gravity",
          goNext:require("./home")
        }
      })
    }
  },
  mounted(){
    
  }
})
