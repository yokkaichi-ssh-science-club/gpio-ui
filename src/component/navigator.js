module.exports=require("./navigator.html")({
  data(){
    return {
      
    }
  },
  computed:{
    
    error:{
      get(){
        return this.$store.state.error
      },
      set(v){
        this.$store.commit("setError",v)
        return v
      }
    },
    pageStack(){
      return this.$store.state.pageStack
    },
    options(){
      return this.$store.state.navOptions
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
})
