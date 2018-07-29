const lists = {
  "gravity":[{
    img:require("../img/mie.png"),
    title:"Hello.",
    text:"We are Yokkaichi High School in Mie Pref. We'd like to introduce our research.",
    color:"#35af55"
  },{
    img:null,
    title:"Purpose",
    text:"First of all,our purpose of this research is to find various ways to measure gravitational acc.",
    color:"#a5ad34"
   },{
    img:require("../img/fall.png"),
    title:"By the way...What is gravity?",
    text:"Gravity is the force by which a planet or other body draws objects toward its center. ",
    color:"#2196f3"
  },{
    img:require("../img/fall.png"),
    title:"Gravitational Acceleration",
    text:"Gravitational acceleration is an expression to indicate the intensity of a gravitational field.",
    color:"#af7e35"
  },{
    img:require("../img/g2yt2.png"),
    title:"How to calculate",
    text:"It is calculated by formula above.(t: time, y: height)",
    color:"#4caf50",
  },{
    title:"Measuring Methods",
    text:"We did 5 different ways to measure it. Click [Next] button to check it out!",
    color:"#ef6c00",
    buttons:[{
      label:"Next"
    }]
  }],
  "ffOpt":[{
    title:"Free fall with optical sensor",
    text:"In this experiment, we made a device that can measure free-fall time of an iron ball accurately.",
    color:"#a7f5a9",
  },{
    img:require("../img/laser.png"),
    title:"How this works #1",
    text:"We used 2 optical sensors (laser) to detect free-fall of the ball.",
    color:"#a7f5a9",
  },{
    img:require("../img/laser.png"),
    title:"How this works #2",
    text:"By measuring the time difference between the 2 sensors, you can find the value of gravitational acceleration.",
    color:"#a7f5a9",
  },{
    img:require("../img/g2yt2.png"),
    title:"Formula",
    text:"We used a formula above to calculate the value.",
    color:"#a7f5a9",
    buttons:[{
      label:"Done"
    }]
   }],
  "ffSW":[{
    title:"Free fall with stopwatch & switch",
    text:"In this experiment, we made a device that can measure free-fall time of an iron ball accurately.",
    color:"#62b8e2",
  },{
    img:require("../img/ffSW.png"),
    title:"What we used",
    text:"We used a stopwatch, an electromagnet, and push switch. By using this, we were able to measure time from the beggining to the end of the free-fall.",
    color:"#8ac8e6",
  },{
    img:require("../img/atwood.png"),
    title:"How this works #1",
    text:"You toggle off an electromagnet and release the ball. At the same time, the stopwatch starts. Then, when the ball lands on the push switch, the stopwatch stops.",
    color:"#8ac8e6",
  },{
    img:require("../img/g2yt2.png"),
    title:"How this works #2",
    text:"By measuring the free-fall time and the height it dropped, you can find the value of gravitational acceleration.",
    color:"#8ac8e6",
  },{
    img:require("../img/g2yt2.png"),
    title:"Formula",
    text:"We used a formula above to calculate the value.",
    color:"#8ac8e6",
    buttons:[{
      label:"Done"
    }]
   }],
  "atwood":[{
    img:require("../img/atwood.png"),
    title:"Atwood Machine",
    text:"Atwood Machine was invented in the late 18c.This device is used to measure the acceleration of objects.",
    color:"#62b8e2",
  },{
    img:require("../img/atwood.png"),
    title:"How this works #1",
    text:"This machine consists of two objects that has different mass, connected by a string over a pulley.",
    color:"#62b8e5",
  },{
    img:require("../img/atwood.png"),
    title:"How this works #2",
    text:"If you release your hands from the objects, they began to move. By measuring height and time it took, you can calculate gravitational acceleration.",
    color:"#62b8e5",
  },{
    img:require("../img/atwood_formula.png"),
    title:"Formula",
    text:"We used a formula above to calculate the value.",
    color:"#62b8e5",
   },{
    img:require("../img/grav.png"),
    title:"All right",
    text:"We'll demonstrate and acutually caluculate the value of gravitational acc.",
    color:"#62b8e5",
     buttons:[{
      label:"Done"
    }]
  }],
  "aldebaran":[{
    title:"Aldebaran Eclipse",
    text:"In this experiment, we used Aldebaran Eclipse to calculate gravitational acceleration.",
    color:"#78909c",
  },{
    img:require("../img/aldebaran_en.gif"),
    title:"By the way...What is Aldebaran Eclipse? ",
    text:"Watch this gif above. This special eclipse occurs every 17 years. We made a good use of this opportunity and observed it.",
    color:"#78909c",
  },{
    title:"How this works",
    text:"We know the radius of earth and the distance between earth and the moon. So, if we could measure angular velocity of the moon, we can calcutate gravitational acceleration.",
    color:"#78909c",
    buttons:[{
      label:"Next"
    }]
  },{
    img:require("../img/aldebaran_formula.png"), //png?
    title:"Formula",
    text:"We used a formula above to calculate the value.",
    color:"#78909c",
    buttons:[{
      label:"Done"
    }]
  }],
  "spring":[{
    img:require("../img/spring.png"),
    title:"Spring Pendulum",
    text:"Spring pendulum is a physical system where an object is connected to a spring.",
    color:"#f9ace8",
  },{
    img:require("../img/pendulum.png"),
    title:"How this works",
    text:"If you pull the object downward, it'll move vertically. By measuring this period, you can calculate gravitational acceleration",
    color:"#f9ace8",
  },{
    img:require("../img/grav.png"),
    title:"Formula",
    text:"We used a formula above to find the value.",
    color:"#f9ace8",
    buttons:[{
      label:"Done"
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
