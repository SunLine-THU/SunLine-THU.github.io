# 暖阳 Studyspace开发过程

**本项目已经在GitHub开源**

> **什么是网站？**

>​		网站(Website)是指在因特网上根据一定的规则，使用HTML（标准通用标记语言）等工具制作的用于展示特定内容相关网页的集合。简单地说，网站是一种沟通工具，人们可以通过网站来发布自己想要公开的资讯，或者利用网站来提供相关的网络服务。人们可以通过网页浏览器来访问网站，获取自己需要的资讯或者享受网络服务。

> ​		网站是在互联网上拥有域名或地址并提供一定网络服务的主机，是存储文件的空间，以服务器为载体。人们可通过浏览器等进行访问、查找文件，也可通过远程文件传输(FTP)方式上传、下载网站文件。

##### 网站一般分为以下几个类型

```
一、品牌型网站：
高端、大气，首页突出设计展示企业品牌，通常用一些华丽的大尺寸图片和动感十足的flash为主，具有较强的互动性。此类网站一般是定制网站，网站要求高，相对费用较高，适合一些中大型公司，上市企业等需要高端品牌建设的企业。
```

```
二、展示型网站
这类网站主要是以产品展示为主，主要是企业介绍、企业产品种类、相关案例等，产品规格和型号方便潜在客户随时看产品信息，网站简单、朴实，没有多么华丽的外观，就是一个展示企业产品业务的简单网站。
```

```
三，营销型网站
近年来企业不断追求的类型网站，网站布局体现产品用户体验+搜索引擎优化规则的合理性，可称为营销型网站建设。营销型网站建站的目标性是直接获取销售线索或直接获得订单，它同时可以像一个业务员一样了解客户，能解除用户在决策时的心理障碍，并顺利促使目标客户留下销售线索或者直接下订单，这就是营销型网站的优点，也是企业不断地追求的建站类型。
```

```
四.电商型网站：
电商网站对于企业来说只是做电商才能用得上的，重要带有相对性的在线下单功能，主要是用来进行企业产品的在线销售，在这类型的网站里会有详细的产品介绍和服务信息，网站上通常会有大量的照片，还会有购物车和付款方式，这主要是为了方便用户完成产品的购买。
```

```
五.门户型网站：
门户型相对来说是专注以资讯来展示的，分享企业的资讯动态，门户型的企业网站建设与电子商务型企业网站就大不相同了，门户型的企业网站通常是为特定的客户建设的，是为他们提供一个资讯交流的平台，通常这类型的企业网站上会有大量的企业资源和企业的服务信息。
```

> **当然本网站并不是以上几种类型之一，而是实打实的个人网站，仅用于学习交流**

# 开发

> **第一行代码**

```
<title>暖阳THU StudySpace</title>
用于设定网页头部显示文字
```

#### 首先开发一个网站需要固定基本布局

此时我们就会遇到几个问题

> 手机端和pc端网页适配问题

> 不同开发语言之间兼容问题

> 保证网站持续运行的带宽不宜过大，否则浪费网站运行带宽的同时加载缓慢

**既然手机端和pc端会出现网页适配问题，那我们是否可以考虑做两款网页**
**主流做法是将手机端引入moblie的三级域名内，但是对于刚开发的人来说过于繁琐了**

**所以...**

```javascript
var t = setTimeout(goon,1);
			function goon(){
				document.getElementById("body").style.background = "url(images/1.jpg) no-repeat";
				document.getElementById("load").style.display="none";
				setInterval(function() {
					var width = window.screen.width;
					if (width < 800){
						document.getElementById("pc_box").style.display= "none";
						document.getElementById("mobile_box").style.display = "";
					}else {
						document.getElementById("pc_box").style.display= "";
						document.getElementById("mobile_box").style.display = "none";
					}
				},100)
			}
```

> **这里我们放置了两个盒子，一个盒子用于手机端显示，一个盒子用于电脑端显示**
>
> **当且仅当，屏幕宽度大于800像素点的时候我们才会打开pc端的盒子，从而解决手机pc兼容，解决带宽过大，被关闭的盒子是不会占用带宽的。同样的也解决了手机端开发用不同语言的问题**

#### 网页的布局

> 现实中有很多网页据有参考价值，所以需要经常逛一些比较有设计感的门户网站

**该网页开发采用的是较为常见的个人信息展示在前，网页内容元素展示在后的开发手段**

> 这样做有一个好处就是，可以占据较大版面，如果后续没内容，不至于看着空空的

> 由于没有合适的后端服务器，本网站为静态网站没有登入、内容上传、与服务器交互等功能

#### 静态网站可不是不会动的网站

```
静态网站和动态网站的区别：
1、静态网页是相对于动态网页而言，是指没有后台数据库、不含程序和不可交互的网页。
2、编的是什么它显示的就是什么、不会有任何改变。
3、静态网页相对更新起来比较麻烦，适用于一般更新较少的展示型网站。
4、另外,如果扩展名为.asp但却没有连数据库,完全是静态的页面,那也是静态网站.只是.asp扩展名。
5、动态网页和静态网页是有区别的，网站采用动态网页还是静态网页主要取决于网站的功能需求和网站内容的多少，如果网站功能比较简单，内容更新量不是很大，采用纯静态网页的方式会更简单，反之一般要采用动态网页技术来实现。不过现在一般的都是采用的动态网站，有内容更新的话就可以随时在后台来更新。
```

### 导航栏开发

###### 我采用的是最基础的办法，即通过js控制当鼠标滚动到多少的时候显示nav块

###### 该方法不说最方便，确是最实用的方法

```javascript
window.onscroll = function() {
				// 获取滚动条向下拉上方遮盖多少像素
				var navtop = document.documentElement.scrollTop || document.body.scrollTop;
				if (navtop >= 100){
					document.getElementById("pc_nav").style.display = "";
				}else {
					document.getElementById("pc_nav").style.display = "none";
				}
```

### video

###### 作为最常用的标签，video也有许多属性，当我们需要展示时可以开启，但是video在苹果机子可以,但安卓不兼容html5，所以在安卓浏览器中不能更好的显示，所以该标签仅在pc端使用最好。至于在安卓怎么显示视频

```javascript
var options = {};
 
var player = videojs(‘example_video_1‘, options, function onPlayerReady() {
  videojs.log(‘播放器已经准备好了!‘);
 
  // In this context, `this` is the player that was created by Video.js.<br>  // 注意，这个地方的上下文， `this` 指向的是Video.js的实例对像player
  this.play();
 
  // How about an event listener?<br>  // 如何使用事件监听？
  this.on(‘ended‘, function() {
    videojs.log(‘播放结束了!‘);
  });
});
```

### 加载页面

**这个就很简单了，把背景none掉，就可以进行GIF图片放置了**

```javascript
// 加载页面
			var d = setTimeout(img,1);
			function img(){
				setInterval(function() {
					var width = window.screen.width;
				},100)
			}
			var s = setTimeout(load,1);
			function load(){
				document.getElementById("pc_box").style.display= "none";
				document.getElementById("mobile_box").style.display = "none";
				document.getElementById('gif').src = document.getElementById('gif').src
			}
```

# 其他

###### 该文档为网站开发思维导图，网页开发项目程序繁杂，所用的内容不能一一展示，若有兴趣学习开发，可移步至学习web篇的开发基础，从css到js

###### 已在GitHub开源，可通过友情链接进入GitHub开源项目中