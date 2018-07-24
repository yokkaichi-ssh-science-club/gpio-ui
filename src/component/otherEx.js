module.exports=require("./otherEx.html")({
  data(){
    return {
    }
  },
  computed:{
    
  },
  methods:{
    otherEx(itemName){
      this.$store.commit("push",{extends:require("./tutorial"),onsNavigatorProps:{itemName}})
    }
  },
  mounted(){
    
  }
})
