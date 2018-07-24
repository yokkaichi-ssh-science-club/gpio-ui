exports.isCordovaNative=()=>(window.cordova&&window.cordova.platformId!=="browser")
exports.isElectron=()=>(window.process && window.process.type)
exports.isNative = ()=>(exports.isCordovaNative()||exports.isElectron())

exports.openUrl=(url)=>{
  if(exports.isElectron()){
    window.electronOpenExternal(url)
    return 
  }
  if(!window.cordova){
    window.open(url,"_blank")
    return
  }
  
  window.cordova.plugins.browsertab.isAvailable(
    result=> {
      if (result)  {
        window.cordova.plugins.browsertab.openUrl(
          url,
          success=>{},
          fail=>{
            window.open(url,"_blank")
          });
      }
    },
    na=> {
      window.open(url,"_blank")
    });
};

exports.shortWait=()=>new Promise(r=>{
  setTimeout(r,140)
})
