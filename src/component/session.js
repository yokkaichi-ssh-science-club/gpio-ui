const socket=require("../socket.js")
module.exports=require("./session.html")({
  data(){
    return {
      state:0,
      result:0
    }
  },
  computed:{
    
  },
  methods:{
    async back(){
      await socket.endSession()
      this.$store.commit("pop")
    },
    async turnOnMagnet(){
      this.state++
      await socket.enableMagnet()
      this.state++
    },
    async attached(){
      this.state++
    },
    async drop(){
      this.state++
      this.result=await socket.startTime()
    }
  },
  mounted(){
    
  }
})
