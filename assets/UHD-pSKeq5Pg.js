import{A as i}from"./Artplayer-BhVpg3Pb.js";import u from"./ClearUserNameComponent-oSdvc5mv.js";import c from"./DanmakuComponent-NISWYhTs.js";import{_ as v,r as o,o as f,c as k,a as n,n as d,F as h}from"./app-UOJ1yjwj.js";import"./Danmaku-6IDVUYdi.js";let _=0;const C={data(){return{option:{container:".artplayer-app",url:"https://live-vps4.b11p.com/live/4k.flv",theme:"#3388bb",isLive:!0,autoplay:!1,autoMini:!1,volume:1,pip:!0,lang:"zh-cn",quality:[{default:!0,html:"IPv4",url:"https://live-vps4.b11p.com/live/4k.flv"},{html:"IPv4+IPv6",url:"https://live-vps.b11p.com/live/4k.flv"},{html:"Cloudflare",url:"https://live-vps-cf.b11p.com/live/4k.flv"},{html:"HLS (iOS 兼容)",url:"https://live-vps4.b11p.com/live/4k.m3u8"},{html:"HLS + 双栈",url:"https://live-vps.b11p.com/live/4k.m3u8"}]},style:{width:"100%","aspect-ratio":"16/9",margin:"0"},danmakuOption:{group:"7659412b-f470-4e61-8c72-0ddb5814ca56",AddDanmakuHistory:(a,l)=>{console.log("Push danmaku"),this.$refs.DanmakuComp.PushDanmaku({id:_++,text:a+": "+l})}}}},components:{Artplayer:i,DanmakuComponent:c,ClearUserNameComponent:u},methods:{getInstance(e){console.info(e)}}};function y(e,a,l,b,t,p){const m=o("Artplayer"),r=o("ClearUserNameComponent"),s=o("DanmakuComponent");return f(),k(h,null,[n(m,{onGetInstance:p.getInstance,option:t.option,style:d(t.style),"danmaku-option":t.danmakuOption},null,8,["onGetInstance","option","style","danmaku-option"]),n(r),n(s,{ref:"DanmakuComp"},null,512)],64)}const P=v(C,[["render",y],["__file","UHD.vue"]]);export{P as default};
