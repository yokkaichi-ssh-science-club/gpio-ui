const socket=require("../socket.js")
const util=require("../util.js")
module.exports=require("./session.html")({
  data(){
    return {
      state:0,
      result:0,
      meter:0.8 //当日、0.8m の高さに設定するつもりだ
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
      const time=(await socket.startTime())/100
      this.result=2*this.meter/time/time
    },
    async other(){
      await this.back()
      await util.shortWait()
      this.$store.commit("push",require("./otherEx"))
    }
  },
  mounted(){
    
  }
})
