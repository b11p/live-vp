import{_ as t,r as s,o as n,c as o,a as i,b as e,d as l,e as h}from"./app-6a37f232.js";const p={},c=e("h1",{id:"咩咩的直播间",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#咩咩的直播间","aria-hidden":"true"},"#"),l(" 咩咩的直播间")],-1),d=e("p",null,"这里是咩咩的直播间。",-1),_=h('<p>前端使用 Artplayer 播放器，弹幕历史、用户名编辑、iOS 兼容模式等功能未移植完成。</p><p>mpegts.js 估计延迟 2 秒。</p><p>如果无法播放，请刷新页面。</p><p>已经上 CN2 GIA 了，再卡自杀。</p><hr><h3 id="直播内容" tabindex="-1"><a class="header-anchor" href="#直播内容" aria-hidden="true">#</a> 直播内容</h3><h4 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a> 计算机网络</h4><p>科普计算机网络知识。</p><p>第二节在北京时间 4 月 2 日周日晚上 8 点，会讲物理层、数据链路层，没听过第一节课也不会有影响！</p><p>课程资料（包含录播等）: https://notes.bleatingsheep.org/s/computer-network</p><p>订阅链接（但是可能没有人会用）</p><p>https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/078f1c11-205c-496e-996e-30b0a5b1ffc9/cid-D8FD15B2A646FB32/calendar.ics</p><h4 id="游戏直播" tabindex="-1"><a class="header-anchor" href="#游戏直播" aria-hidden="true">#</a> 游戏直播</h4><p>每次从下面的游戏里选一个播，可以留言写下想看的游戏，或者在弹幕实时互动，我会播大家喜欢的<s>那不就是黄油吗，这可不兴播啊</s>（x</p><p>游戏列表（已过时，有待更新）：</p><ul><li>宝可梦 紫</li><li>节奏过山车</li><li>咩咩启示录</li><li>苏菲的炼金工房2</li><li>异度神剑3</li><li>奥日系列</li><li>八方旅人</li><li>三位一体4</li><li>马里奥系列（派对、银河、制造）</li><li>Baba Is You</li><li>还有其他的小游戏</li><li><s>舞力全开</s>没摄像头没场地</li></ul><hr><p>TODO:</p><ul><li><s>解决线路切换问题</s></li><li><s>降低延迟</s></li><li><s>改用 DASH，不再使用 HLS</s></li><li><s>加入弹幕</s></li><li><s>加入聊天框显示最近的弹幕，以免错过</s>以某种方式实现了……</li><li>后台记录发送的弹幕</li><li>显示在线人数</li><li><s>增强弹幕功能健壮性：确保自动重连、离线或发送失败时提示用户</s>弹幕很久没出过问题了已经，应该差不多了。</li></ul><p>不换 DASH，改用 FLV 了，虽然不能自动切换清晰度，但是延迟低。</p><p><s>ArtPlayer 似乎是一个很好的替代，它可以编写代码来实现在切换清晰度时正确地销毁之前的实例，但我不想在前端上花太多工夫。</s><span></span>工夫还是花了，播放格式和网络线路切换功能正在制作。</p><p>新 TODO:</p><ul><li><s>断线重连</s><em>大概完成了，出现无法重连的情况请告诉我。</em><ul><li><s>重连后恢复之前的播放状态</s></li></ul></li><li>加载并显示最近一段时间的弹幕</li><li>显示并更改当前的用户名</li><li>暂停后，缓冲过长时销毁播放器，并在恢复播放时重新加载</li><li>切换格式、节点</li><li>界面修缮（让视频的宽度超过文字，这样在不全屏的情况下视频会更大）</li></ul><h3 id="软件" tabindex="-1"><a class="header-anchor" href="#软件" aria-hidden="true">#</a> 软件</h3>',24),u={href:"https://artplayer.org/document/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/ossrs/srs",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/b11p/bleatingsheep.Danmaku",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"直播间申请",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#直播间申请","aria-hidden":"true"},"#"),l(" 直播间申请")],-1),x=e("p",null,"前端太难了 qwq",-1),g=e("p",null,"虽然现在的代码还是很乱，但是应该不需要改很多代码来添加新的直播间。如果你也想要一个直播页面，可以联系我添加。",-1);function k(D,A){const r=s("Live"),a=s("ExternalLinkIcon");return n(),o("div",null,[c,d,i(r),_,e("ul",null,[e("li",null,[l("播放器："),e("a",u,[l("ArtPlayer"),i(a)])]),e("li",null,[l("直播后台："),e("a",f,[l("SRS"),i(a)])]),e("li",null,[l("弹幕后台："),e("a",b,[l("https://github.com/b11p/bleatingsheep.Danmaku"),i(a)]),l("（自制）")])]),m,x,g])}const v=t(p,[["render",k],["__file","index.html.vue"]]);export{v as default};
