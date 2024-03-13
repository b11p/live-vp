# 咩咩的直播间

这里是咩咩的直播间。

<Live></Live>

mpegts.js 估计延迟 2 秒。

如果无法播放，请刷新页面。

~~已经上 CN2 GIA 了，再卡自杀。~~<span/>现在不是 CN2 GIA，但是应该不卡。

---
### 直播内容
#### 游戏直播
每次从下面的游戏里选一个播，可以留言写下想看的游戏，或者在弹幕实时互动，我会播大家喜欢的~~那不就是黄油吗，这可不兴播啊~~（x

游戏列表（已过时，有待更新）：

- 宝可梦 紫
- 节奏过山车
- 咩咩启示录
- 苏菲的炼金工房2
- 异度神剑3
- 奥日系列
- 八方旅人
- 三位一体4
- 马里奥系列（派对、银河、制造）
- Baba Is You
- 还有其他的小游戏
- ~~舞力全开~~没摄像头没场地

#### 计算机网络
科普计算机网络知识。

第二节在北京时间 4 月 2 日周日晚上 8 点，会讲物理层、数据链路层，没听过第一节课也不会有影响！

课程资料（包含录播等）: https://notes.bleatingsheep.org/s/computer-network

订阅链接（但是可能没有人会用）

https://outlook.live.com/owa/calendar/00000000-0000-0000-0000-000000000000/078f1c11-205c-496e-996e-30b0a5b1ffc9/cid-D8FD15B2A646FB32/calendar.ics

### 其他信息

推流参数：

一般是 CRF/CQP + 上限码率。具体参数经常更改，但上限码率一般在 10M 以内。

最近使用的参数：

- 编码器：AMD HW H.264 (AVC)
- CQP：20
- 视频码率：9920 Kbps
- 音频码率：320 Kbps
- Preset: Quality
- Profile: high

---
TODO:

- ~~解决线路切换问题~~
- ~~降低延迟~~
- ~~改用 DASH，不再使用 HLS~~
- ~~加入弹幕~~
- ~~加入聊天框显示最近的弹幕，以免错过~~以某种方式实现了……
- 后台记录发送的弹幕
- 显示在线人数
- ~~增强弹幕功能健壮性：确保自动重连、离线或发送失败时提示用户~~弹幕很久没出过问题了已经，应该差不多了。

不换 DASH，改用 FLV 了，虽然不能自动切换清晰度，但是延迟低。

~~ArtPlayer 似乎是一个很好的替代，它可以编写代码来实现在切换清晰度时正确地销毁之前的实例，但我不想在前端上花太多工夫。~~<span />工夫还是花了，播放格式和网络线路切换功能正在制作。

新 TODO:

- ~~断线重连~~*大概完成了，出现无法重连的情况请告诉我*
    - ~~重连后恢复之前的播放状态~~
- ~~调查 Firefox 刷新后无法播放的问题~~*已缓解*
    - 若出现此情况请清空缓存，或者换用 Edge
- 不同播放格式
    - ~~HLS (for iOS)~~ done
    - Webrtc（延迟比 mpegts.js 还要低）
        - delayed
        - SRS 音频格式转换会导致轻微的音视频不同步，推迟到 WHIP/WHEP
            - 虽然 SRS 和 OBS 都支持 WHIP/WHEP 推拉流了，但是画面有时候会烂掉。怀疑是 UDP 丢包导致的，但是 iperf3 测试未发现丢包。继续推迟到 OBS 支持 TCP WebRTC
    - 使用不同格式时显示不同的延迟信息（如 HLS 延迟较高）
        - 需要学习不同 Vue 组件之间传递数据，以后再搞吧
- ~~加载并显示最近一段时间的弹幕~~
- ~~显示并更改当前的用户名~~
- 暂停后，缓冲过长时销毁播放器，并在恢复播放时重新加载
    - mpegts.js
        - 问题：缓冲达到一定长度时会自动断开连接，此时自动追进度功能失效，并且缓冲区快耗尽时 mpegts 会尝试 seek，而 SRS 不支持此操作（或者说此操作不适合直播场景），导致卡住
        - 解决方法：播放时或者从暂停恢复时检测，如果连接已经中断（或者缓冲区大于某个长度，这个长度必须小于 mpegts 断开连接时的缓冲区长度），就销毁播放器重新加载
    - Hls.js
        - 问题：暂停后，自动追延迟功能会一直往前追，在用户未观看时一直消耗流量。此问题不会导致播放卡住
        - 解决方法：需要详细查阅 Hls.js 是否有灵活禁用追延迟 feature 的开关，或者在外部控制一定时间后销毁播放器
- ~~切换格式、节点~~
- 界面修缮（让视频的宽度超过文字，这样在不全屏的情况下视频会更大）

### 软件

- 播放器：[ArtPlayer](https://artplayer.org/document/)
- 直播前台：<https://github.com/b11p/live-vp>
- 直播后台：[SRS](https://github.com/ossrs/srs)
- 弹幕后台：<https://github.com/b11p/bleatingsheep.Danmaku>（自制）

### 直播间申请

前端太难了 qwq

虽然现在的代码还是很乱，但是应该不需要改很多代码来添加新的直播间。如果你也想要一个直播页面，可以联系我添加。

例如：[MyGO](/MyGO/README.md)