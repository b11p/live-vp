import{A as i}from"./Artplayer-BXh67a-Q.js";import u from"./ClearUserNameComponent-QOMtvDEl.js";import c from"./DanmakuComponent-VeGPNOb9.js";import{_ as v,r as o,o as k,c as f,a as n,n as d,F as h}from"./app-DrTCFajI.js";import"./Danmaku-eH44bKA-.js";let _=0;const y={data(){return{option:{container:".artplayer-app",url:"https://live-vps4.b11p.com/live/4k.m3u8",theme:"#3388bb",isLive:!0,autoplay:!1,autoMini:!1,volume:1,pip:!0,lang:"zh-cn",quality:[{default:!0,html:"HLS (更稳定)",url:"https://live-vps4.b11p.com/live/4k.m3u8"},{html:"HLS + 双栈",url:"https://live-vps.b11p.com/live/4k.m3u8"},{html:"FLV (延迟更低)",url:"https://live-vps4.b11p.com/live/4k.flv"},{html:"FLV + 双栈",url:"https://live-vps.b11p.com/live/4k.flv"}]},style:{width:"100%","aspect-ratio":"16/9",margin:"0"},danmakuOption:{group:"7659412b-f470-4e61-8c72-0ddb5814ca56",AddDanmakuHistory:(a,p)=>{console.log("Push danmaku"),this.$refs.DanmakuComp.PushDanmaku({id:_++,text:a+": "+p})}}}},components:{Artplayer:i,DanmakuComponent:c,ClearUserNameComponent:u},methods:{getInstance(e){console.info(e)}}};function C(e,a,p,b,t,l){const m=o("Artplayer"),r=o("ClearUserNameComponent"),s=o("DanmakuComponent");return k(),f(h,null,[n(m,{onGetInstance:l.getInstance,option:t.option,style:d(t.style),"danmaku-option":t.danmakuOption},null,8,["onGetInstance","option","style","danmaku-option"]),n(r),n(s,{ref:"DanmakuComp"},null,512)],64)}const L=v(y,[["render",C],["__file","UHD.vue"]]);export{L as default};