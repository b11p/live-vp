import{f as l,g as t,h as m,_ as d,o as _,c as i,d as s,b as u,t as p}from"./app-T4Mi9Kae.js";const f=l({__name:"ClearUserNameComponent",setup(c,{expose:r}){r();const a=t(null),e=t(null);m(async()=>{a.value=window.localStorage.getItem("danmakuUserName"),a.value&&(e.value.hidden=!1)});function o(){window.localStorage.removeItem("danmakuUserName"),window.alert("清除成功，发送弹幕即可重新设置用户名。"),e.value.hidden=!0}const n={userName:a,userNameP:e,clearUserName:o};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),N={ref:"userNameP",hidden:""},C={id:"userNameSpan"};function h(c,r,a,e,o,n){return _(),i("p",N,[s("你的用户名是："),u("span",C,p(e.userName),1),s(),u("button",{onClick:e.clearUserName},"清除用户名")],512)}const U=d(f,[["render",h],["__file","ClearUserNameComponent.vue"]]);export{U as default};
