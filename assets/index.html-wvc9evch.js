import{_ as n,r as s,o,c as l,a,b as e}from"./app-DKhlD4r3.js";const _={},c=e("h1",{id:"_4k-直播房",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4k-直播房"},[e("span",null,"4K 直播房")])],-1),i=e("ul",null,[e("li",null,"码率：CRF 20，平均约 30Mbps，峰值 40Mbps，开幕部分约 5Mbps"),e("li",null,"参数：H264, 4096×2304, 60fps")],-1),r=e("p",null,"注意，能否流畅播放取决于网络及设备等因素。HLS 延迟稍高，带宽超过 30M，使用 HLS 一般不卡。",-1),d=e("p",null,"FLV 在网络好的情况下延迟更低，这种延迟优化的代价是本地缓冲较小，易造成卡顿。同时，FLV 使用 TCP 进行传输，其拥塞控制可能导致传输速率进一步受限。例如，从开幕部分进入舞台的码率变化较大，若 TCP 连接速率未及时提高，则会卡顿。这种卡顿的解决方法包括改善网络延迟及丢包、换用带宽探测更快的拥塞控制算法、使用缓冲更大的 HLS、使用 UDP 绕过拥塞控制等。Linux 系统对 TCP 窗口处理更好，通常更不会由于网络问题而卡顿。",-1),p=e("p",null,"若出现异常色块，则说明显卡解码有问题，已知 AMD 显卡硬解会出现这种问题，改用软解正常。",-1),h=e("p",null,"Windows 系统推荐使用 Edge，对硬件解码支持最好，Firefox 可能无法播放。",-1);function u(f,m){const t=s("UHD");return o(),l("div",null,[c,a(t),i,r,d,p,h])}const C=n(_,[["render",u],["__file","index.html.vue"]]),H=JSON.parse('{"path":"/4K/","title":"4K 直播房","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"4K/README.md"}');export{C as comp,H as data};
