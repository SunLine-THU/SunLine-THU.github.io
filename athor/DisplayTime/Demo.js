window.onload = function (){
	// 窗体加载后，获取元素，和执行每秒调用变化函数
	var h1 = document.getElementById("h1");
	var h2 = document.getElementById("h2");
	var m1 = document.getElementById("m1");
	var m2 = document.getElementById("m2");
	var s1 = document.getElementById("s1");
	var s2 = document.getElementById("s2");
	var h1_img = document.getElementById("h1_img");
	var h2_img = document.getElementById("h2_img");
	var m1_img = document.getElementById("m1_img");
	var m2_img = document.getElementById("m2_img");
	var s1_img = document.getElementById("s1_img");
	var s2_img = document.getElementById("s2_img");
	setInterval(displayTime, 1000);
}

function displayTime() {
	// 获取时间
	var date = new Date()
	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	// 将小于10的时间通过tostring来变成两位数，通过数组访问
	hour = toStr(hour)
	minute = toStr(minute)
	second = toStr(second)
	
	// h1.innerHTML=hour[0];
	// h2.innerHTML=hour[1];
	// m1.innerHTML=minute[0];
	// m2.innerHTML=minute[1];
	// s1.innerHTML=second[0];
	// s2.innerHTML=second[1];
	
	// 设置图片进入样式中
	setImg(h1_img, hour[0]);
	setImg(h2_img, hour[1]);
	setImg(m1_img, minute[0]);
	setImg(m2_img, minute[1]);
	setImg(s1_img, second[0]);
	setImg(s2_img, second[1]);
}
function toStr(num) {
	// 通过三目运算来判断是否小于十
	return num < 10 ? "0" + num:num.toString()
}
function setImg(e, num){
	// 接收参数来改变对应的Element图片
	h = num
	x = h * 160;
	e.style.transform = "translateX("+ -x + "px )";
}