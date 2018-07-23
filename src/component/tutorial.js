const carouselItems=[{
  img:null,
  title:"test2_Gravitional",
  text:"Grabitional acce;eratkion",
  color:"#2196f3"
},{
  img:null,
  title:"Gravitional",
  text:"Grabitional acce;eratkion",
  color:"#4caf50",
  buttons:[{
    label:"Learn more",
    url:"https://www.google.co.jp/"
  }]
},{
  img:null,
  title:"Acceleration",
  text:"Grabitional acce;eratkion",
  color:"#ef6c00",
  
},{
  img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
  title:"Acceleration",
  text:"Grabitional acce;eratkion",
  color:"#78909c",
  buttons:[{
    label:"Next",
    push:require("./home.js")
  }]
}]
module.exports=require("./tutorial.html")({
  data(){
    return {
      items:carouselItems,
      index:0
    }
  },
  computed:{
    
  },
  methods:{
    buttonClicked(btn){
      if(btn.push){
        this.$store.commit("push",btn.push)
      }else if(btn.url){
        alert(btn.url)
      }
    },
    skip(){
      this.$store.commit("push",require("./home.js"))
    }
  },
  mounted(){
    
  }
})
