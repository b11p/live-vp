import{A as i}from"./Artplayer-E3qn1M8Z.js";import u from"./ClearUserNameComponent-d-_8id4f.js";import c from"./DanmakuComponent-gaK9jdBC.js";import{_ as f,r as t,o as d,c as _,a as o,n as k,F as h}from"./app-DP-NseLG.js";import"./Danmaku-CBVt8eiu.js";let y=0;const C={data(){return{option:{container:".artplayer-app",url:"https://nas.qrihome.fun:32343/live/livestream.flv",theme:"#ea94b5",isLive:!1,autoplay:!1,autoMini:!1,volume:1,pip:!0,lang:"zh-cn",quality:[{default:!0,html:"默认",url:"https://nas.qrihome.fun:32343/live/livestream.flv"}]},style:{width:"100%","aspect-ratio":"16/9",margin:"0"},danmakuOption:{group:"bbda9a4b-bfe8-4704-87b1-9cf2088edaa5",AddDanmakuHistory:(a,r)=>{console.log("Push danmaku"),this.$refs.DanmakuComp.PushDanmaku({id:y++,text:a+": "+r})}}}},components:{Artplayer:i,DanmakuComponent:c,ClearUserNameComponent:u},methods:{getInstance(e){console.info(e)}}};function v(e,a,r,g,n,m){const s=t("Artplayer"),l=t("ClearUserNameComponent"),p=t("DanmakuComponent");return d(),_(h,null,[o(s,{onGetInstance:m.getInstance,option:n.option,style:k(n.style),"danmaku-option":n.danmakuOption},null,8,["onGetInstance","option","style","danmaku-option"]),o(l),o(p,{ref:"DanmakuComp"},null,512)],64)}const N=f(C,[["render",v],["__file","Mutsumi.vue"]]);export{N as default};
