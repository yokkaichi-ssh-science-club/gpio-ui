module.exports=require("./session.html")({
  data(){
    return {
      state:0
    }
  },
  computed:{
    
  },
  methods:{
    back(){
      this.$store.commit("pop")
    },
    turnOnMagnet(){
      this.state=1
    },
    attached(){
      this.state=2
    },
    drop(){
      this.state=3
    }
  },
  mounted(){
    
  }
})
