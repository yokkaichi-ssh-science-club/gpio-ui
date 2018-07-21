module.exports=require("./navigator.html")({
  data(){
    return {
      
    }
  },
  computed:{
    openSide:{
      get(){
        return this.$store.state.openSide
      },
      set(v){
        this.$store.commit("openSide",v)
        return v
      }
    },
    bgClass(){
      return this.$store.state.bgClass
    },
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
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
})
