const io = require("socket.io-client")
const EventEmitter = require("eventemitter3")

exports=module.exports=new EventEmitter()
let socket;
exports.connect=()=>new Promise((resolve,reject)=>{
  socket=io(`http://${location.hostname}:5000`)
  socket.once('connect', resolve);

})

exports.isConnected=()=>{
  return socket.connected
}

exports.claimSession=()=>new Promise((resolve,reject)=>{
  //resolve: successfully claimed
  //reject : failed to claim
  socket.emit("claimSession",state=>{
    if(state){resolve()}else{reject()}
  })
})

exports.enableMagnet=()=>new Promise((resolve,reject)=>{
  socket.emit("enableMagnet",state=>{
    if(state){resolve()}else{reject()}
  })
})

exports.startTime=()=>new Promise((resolve,reject)=>{
  socket.emit("startTime",value=>{
    resolve(value)
  })
})

exports.endSession=()=>new Promise((resolve,reject)=>{
  socket.emit("endSession",state=>{
    if(state){resolve()}else{reject()}
  })
})
