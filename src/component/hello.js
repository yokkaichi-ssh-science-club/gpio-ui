module.exports=require("./hello.html")({
  data(){
    return {
    }
  },
  computed:{
    
  },
  methods:{
    tutorial(){
      this.$store.commit("push",require("./tutorial"))
    }
  },
  mounted(){
    
  }
})
