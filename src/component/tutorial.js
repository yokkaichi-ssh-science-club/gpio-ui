const carouselItems=[{
  img:"https://rankers.ajax.jp/img/apple.png",
  title:"What is gravity?",
  text:"Gravity is the force by which a planet or other body draws objects toward its center. ",
  color:"#2196f3"
},{
  img:"https://rankers.ajax.jp/img/formula.png",
  title:"",
  text:"Gravity is calculated by formula above.",
  color:"#4caf50",
  buttons:[{
    label:"Learn more",
    url:"https://www.google.co.jp/"
  }]
},{
  img:null,
  title:"About this experiment",
  text:"Our team did precise experiments to find the value of gravitational acceleration.",
  color:"#ef6c00",
  
},{
  img:null,
  title:"Measuring Methods",
  text:"We used 4 different theory to measure.1.2.",
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
    this.$ons.notification.toast('Try swiping here!',{timeout: 2000})
  }
})
