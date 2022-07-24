window.onload = function (){
	console.log("%c路有多远，\n只有心知道，\n最美的旅程，\n是不断的经历，\n坚持走下去．\n我是开发者暖阳,\n与您同行！", "line-height:22px;color:#00a5f2");
	console.log("%c这是我的第二个网站的Demo版本，当前仅用来做live2d的测试", "line-height:22px;color:#FFA500");
	var width = window.screen.width;
	// var change_time = setInterval(function (){
	// 	change(width)
	// },800)
	// window.clearInterval(change_time)
	change(width)
	
	var div = document.createElement('div');
	div.setAttribute('style','position: fixed; bottom: 0px; right: 0px;')
	div.innerHTML = '<iframe id="idFrame" name="idFrame" src="./live2d/live2d.html" height = "300px" width = "300px" frameborder="0" scrolling="no"></iframe>'
	document.body.appendChild(div);
}
function change(width){
	if(width < 800){
		// 手机
		document.getElementById("mobile").style.display="";
		document.getElementById("pc").style.display="none";
	}else{
		// 电脑
		document.getElementById("mobile").style.display="none";
		document.getElementById("pc").style.display="";
		document.getElementById("pc_head").style.background="url(https://w.wallhaven.cc/full/o3/wallhaven-o3r2kl.jpg) no-repeat"
	}
}
window.onscroll = function() {
	// 获取滚动条向下拉上方遮盖多少像素
	var navtop = document.documentElement.scrollTop || document.body.scrollTop;
	if (navtop >= 300){
		document.getElementById('pc_top_nav').style.transform = "translateY("+ "0px" +")";
	}else {
		document.getElementById('pc_top_nav').style.transform = "translateY("+ "-60px" +")";
	}
}
function Loading() {
	alert('当前正在开发中')
}
var Easter_egg_inde = 0;
function Easter_egg() {
	var Easter_egg = ['别点了','没有彩蛋','真拿你没办法（摘眼镜）','啊对对对对','摆烂了'];
	alert(Easter_egg[Easter_egg_inde]);
	Easter_egg_inde += 1;
	if(Easter_egg_inde >= Easter_egg.length){
		Easter_egg_inde = 0;
	}
}
