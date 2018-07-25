const lists = {
  "gravity":[{
    img:null,
    title:"Hello.",
    text:"We are Yokkaichi High School in Mie Pref. We'd like to introduce our research.",
    color:"#a5ad34"
  },{
    img:null,
    title:"Purpose",
    text:"First of all,our purpose of this research is to find various ways to measure gravitational acc.",
    color:"#a5ad34"
   },{
    img:require("../img/fall.png"),
    title:"What is gravity?",
    text:"Gravity is the force by which a planet or other body draws objects toward its center. ",
    color:"#2196f3"
  },{
    img:require("../img/grav.png"),
    title:"",
    text:"Gravity is calculated by formula above.",
    color:"#4caf50",
    buttons:[{
      label:"Learn more",
      url:"https://www.google.co.jp/"
    }]
  },{
    img:null,
    title:"Measuring Methods",
    text:"We did 5 different experiments in all.",
    color:"#ef6c00",  
  },{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  }],
  "ffOpt":[{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  }],
  "ffSW":[{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  }],
  "atwood":[{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"atwood",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  }],
  "aldebaran":[{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  },{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  },{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  },{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  }],
  "spring":[{
    img:"https://monya-wallet.github.io/assets/images/screenshot/first.png",
    title:"Acceleration",
    text:"Grabitional acce;eratkion",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  }]
}
const util = require("../util")
module.exports=require("./tutorial.html")({
  data(){
    return {
      index:0,
      items:[]
    }
  },
  props:["itemName","goNext"],
  methods:{
    buttonClicked(btn){
      if(btn.push){
        this.$store.commit("push",btn.push)
      }else if(btn.url){
        util.openUrl(btn.url)
      }else{
        if(this.index>this.items.length-2){
          this.skip()
        }else{
          this.index++
        }
      }
    },
    skip(){
      if(this.goNext){
        this.$store.commit("push",this.goNext)
      }else{
        this.$store.commit("pop")
        
      }
    }
    
  },
  created(){
    this.items=lists[this.itemName||"gravity"]
  }
})
