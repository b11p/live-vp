import{A as n}from"./Artplayer-SftSmBfA.js";import{_ as a,r,o as i,f as p,n as s}from"./app-UFrHFlZU.js";import"./Danmaku-y849JZny.js";const c={data(){return{option:{container:".artplayer-app",url:"https://live-flv.b11p.com/live/livestream.flv",theme:"#ea94b5",isLive:!1,autoplay:!1,autoMini:!1,volume:1,pip:!0,lang:"zh-cn",quality:[{default:!0,html:"IPv4",url:"https://live4.b11p.com/live/livestream.flv"},{html:"Cloudflare",url:"https://live-cf.b11p.com/live/livestream.flv"},{html:"HLS (iOS 兼容)",url:"https://live-flv.b11p.com/live/livestream.m3u8"}]},style:{width:"100%","aspect-ratio":"16/9",margin:"0"},danmakuOption:{group:"4463403c-aff8-c16d-0933-4636405ff116"}}},components:{Artplayer:n},methods:{getInstance(e){console.info(e)}}};function m(e,f,u,v,t,o){const l=r("Artplayer");return i(),p(l,{onGetInstance:o.getInstance,option:t.option,style:s(t.style),"danmaku-option":t.danmakuOption},null,8,["onGetInstance","option","style","danmaku-option"])}const y=a(c,[["render",m],["__file","Live.vue"]]);export{y as default};