import{g as _,h as c,o as e,c as n,F as l,i as r,t as m,b as t,_ as p}from"./app-o8KYB_X4.js";const i={style:{width:"100%"}},d=t("summary",null,"弹幕历史",-1),h=t("p",null,"123",-1),k=t("p",null,"456",-1),f=_({__name:"DanmakuComponent",setup(D,{expose:u}){const s=c([]);return u({PushDanmaku:o=>{console.log("Push danmaku in component"),s.value.push(o)}}),(o,g)=>(e(),n("details",i,[d,h,k,(e(!0),n(l,null,r(s.value,a=>(e(),n("p",{key:a.id},m(a.text),1))),128))]))}}),C=p(f,[["__file","DanmakuComponent.vue"]]);export{C as default};
