import{g as s,h as n,i as l,o as m,c,d as o,b as t,t as u,_ as d}from"./app-UFrHFlZU.js";const i={id:"userNameSpan"},_=s({__name:"ClearUserNameComponent",setup(p){const e=n(null),a=n(null);l(async()=>{e.value=window.localStorage.getItem("danmakuUserName"),e.value&&(a.value.hidden=!1)});function r(){window.localStorage.removeItem("danmakuUserName"),window.alert("清除成功，发送弹幕即可重新设置用户名。"),a.value.hidden=!0}return(f,N)=>(m(),c("p",{ref_key:"userNameP",ref:a,hidden:""},[o("你的用户名是："),t("span",i,u(e.value),1),o(),t("button",{onClick:r},"清除用户名")],512))}}),v=d(_,[["__file","ClearUserNameComponent.vue"]]);export{v as default};
