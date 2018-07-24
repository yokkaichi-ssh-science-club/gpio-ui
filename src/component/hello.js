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
    }
  },
  mounted(){
    
  }
})
