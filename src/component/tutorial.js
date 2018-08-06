const lists = {
  "gravity":[{
    img:require("../img/shiko.jpg"),
    title:"こんにちは！！",
    text:"三重県立四日市高校です。私たちの研究成果を発表したいと思います。",
    color:"#35af55"
  },{
    img:null,
    title:"研究目的",
    text:"私たちの研究の目的は重力加速度を様々な方法で測定することです。また、測定結果からどの手法が良いのかを調べ考察も行いました。",
    color:"#a5ad34"
   },{
    img:require("../img/fall.png"),
    title:"重力とは",
    text:"重力とは、地球が物体を引っ張る万有引力と地球の自転による遠心力の合力です。 ",
    color:"#2196f3"
  },{
    img:require("../img/fall.png"),
    title:"重力加速度",
    text:"重力加速度とは、重力によって生じる加速度のことです。今回私たちはこの値を求めました。",
    color:"#af7e35"
  },{
    img:require("../img/val9.8.png"),
    title:"重力加速度の値",
    text:"ご存知の方もいると思いますが、重力加速度は9.8m/s/sとして一般に知られています。私たちは実験を行った四日市の重力加速度(9.797)を基準として評価を行いました",
    color:"#4caf50",
  },{
    img:require("../img/5.png"),
    title:"測定方法",
    text:"私たちは5種類の実験で重力加速度を求めました。 [次へ]ボタンをクリックで、実験の詳細をご紹介します。",
    color:"#ef6c00",
    buttons:[{
      label:"次へ"
    }]
  }],
  "ffOpt":[{
    title:"光センサーを使った自由落下の実験",
    text:"この実験では、鉄球の自由落下にかかる時間を正確に測れる装置を作成しました。",
    color:"#89c78a",
  },{
    img:require("../img/laser2.png"),
    title:"実験原理＆仕組み #1",
    text:"この実験では光センサー（レーザー光）を2つ使いました。2つ使うことによって鉄球の落下を検出することができます。",
    color:"#89c78a",
  },{
    img:require("../img/laser_double.png"),
    title:"実験原理＆仕組み #2",
    text:"2つの光センサー間の距離を測っておき、鉄球を落下させます。その際の時間差を光センサーで検出することで、重力加速度を求めます。",
    color:"#89c78a",
  },{
    img:require("../img/ffop_pic.png"),
    title:"実験装置の全体図",
    text:"実際に作った装置の仕組みです。鉄球を落下させる際、初速度を与えないように電磁石を使って鉄球を落下させました。",
    color:"#89c78a",
  },{
    img:require("../img/g2yt2.png"),
    title:"関係式",
    text:"この実験では、得られた値をこの式に代入して重力加速度の値を算出しました。",
    color:"#89c78a",
    buttons:[{
      label:"トップに戻る"
    }]
   }],
  "ffSW":[{
    title:"ストップウォッチとスイッチを使った自由落下の実験",
    text:"この実験では、私たちは鉄球の自由落下にかかる時間を正確に測れる装置を自作しました。",
    color:"#62b8e2",
  },{
    img:require("../img/ffSW.png"),
    title:"実験器具",
    text:"この実験ではストップウォッチ、電磁石、プッシュスイッチを使いました。これらの器具を使うことで 自由落下の開始から終了までの時間を測ることができます。",
    color:"#8ac8e6",
  },{
    img:require("../img/electromg.png"),
    title:"実験装置",
    text:"電磁石の電源を切ると鉄球が落ち、それと同時に時間の測定が開始され、 鉄球がプッシュスイッチに衝突すると時間の測定を終了する装置を組み立てました。",
    color:"#8ac8e6",
  },{
    title:"実験原理",
    text:"自由落下にかかった時間と落ちた高さを測ることで重力加速度の値を求めることができます。",
    color:"#8ac8e6",
  },{
    img:require("../img/g2yt2.png"),
    title:"関係式",
    text:"この実験では、得られた値をこの式に代入して重力加速度の値を算出しました。",
    color:"#8ac8e6",
    buttons:[{
      label:"トップへ戻る"
    }]
   }],
  "atwood":[{
    img:require("../img/atwood.png"),
    title:"アトウッドの器械",
    text:"アトウッドの器械は18世紀終わりに発明された装置です。この装置は滑車を使うため物体の落下速度を小さくすることができます。そのため、正確に時間を測れなかった時代に物体の加速度を測る目的で使われました。",
    color:"#62b8e2",
  },{
    img:require("../img/atwood.png"),
    title:"実験手法",
    text:"この実験では2つの質量の異なる物体を糸でつなぎ、滑車にかけます。",
    color:"#62b8e5",
  },{
    img:require("../img/electromg.png"),
    title:"実験原理",
    text:"2つの物体をささえていた手を放すと、物体は動き出します。それらの落下時間と落下した高さを測ることで重力加速度を求めることができます。この実験では初速度を与えないために電磁石を用いました。",
    color:"#62b8e5",
  },{
    img:require("../img/atwood_formula.png"),
    title:"関係式",
    text:"この実験では、得られた値をこの式に代入して重力加速度の値を算出しました。",
    color:"#62b8e5",
   },{
    title:"それでは",
    text:"実際に重力加速度の値を測定してみたいと思います。机上の実験装置に注目してください",
    color:"#62b8e5",
     buttons:[{
      label:"トップに戻る"
    }]
  }],
  "aldebaran":[{
    img:require("../img/aldebaran_pic_en.png"),
    title:"アルデバラン食",
    text:"この実験では、重力加速度を求めるためにアルデバラン食を使いました。",
    color:"#78909c",
   },{
    img:require("../img/aldebaran_formula.png"),
    title:"実験原理 #1",
    text:"地球の半径と、月と地球の距離はよく知られた値です。そのため、月の公転の角速度を測ることで上の関係式から、重力加速度を求めることができます。",
    color:"#78909c",
  },{
    img:require("../img/earthandmoon.png"),
    title:"実験原理 #2",
    text:"そこで、月の公転の角速度を測るために、アルデバラン食という現象を利用しました。",
    color:"#78909c",
  },{
    img:require("../img/aldebaran_en.gif"),
    title:"ところで、アルデバラン食とはなんでしょうか？ ",
    text:"この画像を見てください。アルデバラン食は十数年に一度アルデバランという恒星が月に隠れる現象です。 この機会を生かして、私たちはアルデバラン食を観察しました。",
    color:"#78909c",
  },{
    img:require("../img/aldebaran_en.gif"),
    title:"実験原理 #3",
    text:"アルデバラン食開始と終了の時間、月に対するアルデバランの位置の変化を測定することで、月の移動距離とそれにかかる時間がわかります。これらを用いて月の角速度を求めました。",
    color:"#78909c",
  },{
    img:require("../img/aldebaran_formula.png"), //png?
    title:"関係式",
    text:"この実験では、得られた値をこの式に代入して重力加速度の値を算出しました。",
    color:"#78909c",
    buttons:[{
      label:"トップへ戻る"
    }]
  }],
  "spring":[{
    img:require("../img/spring_en.png"),
    title:"鉛直ばね振り子",
    text:"鉛直ばね振り子はバネと物体とをつないだ実験装置です。",
    color:"#f9ace8",
  },{
    img:require("../img/pendulum.png"),
    title:"実験原理",
    text:"物体を下に引っ張って放すと、物体は垂直に振動します。その周期を測ることから重力加速度を求めることができます。iPhoneを使い、振り子の振動を動画撮影しました。",
    color:"#f9ace8",
  },{
    img:require("../img/aokiware.png"),
    title:"解析方法",
    text:"この実験ではコマ送りの解析ができる自作ソフトウェアを作り、撮影した動画を解析しました。解析で得られたデータから、ばね振り子の周期を求めました。",
    color:"#f9ace8",
  },{
    img:require("../img/2pilingo.png"),
    title:"公式",
    text:"この実験では、得られた値をこの式に代入して重力加速度の値を算出しました。",
    color:"#f9ace8",
    buttons:[{
      label:"トップへ戻る"
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
