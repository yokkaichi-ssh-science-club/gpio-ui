const io = require("socket.io-client")
const EventEmitter = require("eventemitter3")

exports=module.exports=new EventEmitter()

exports.connect=()=>new Promise((resolve,reject)=>{
  
})

exports.claimSession=()=>new Promise((resolve,reject)=>{
  //resolve: successfully claimed
  //reject : failed to claim
  setTimeout(()=>{
    if(Math.random()>0.3){
      resolve()
    }else{
      reject()
    }
  },400+Math.random()*400)
})

exports.enableMagnet=()=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve()
  },300)
})

exports.startTime=()=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(978)//x100 m/s^2
  },1100)
})

exports.endSession=()=>new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve()
  },300)
})
