window.onload = function () {
	var date = new Date();
	hour_info = date.getHours();
	second = document.getElementById("time");
	btn = document.getElementById("bt");
}
function getTime() {
	btn.disabled=true;
	if (second.value == 0){
		alert("请输入等待时间");
		return 0;
	}
	time = second.value * 1000;
	setTimeout(show_info, time);
	setTimeout(btn_on, 2000);
}
function show_info() {
	var popNotice = function() {
		if (Notification.permission == "granted") {
			var notification = new Notification("饮茶提醒", {
					body:"北京时间 " + hour_info + "点",
					// icon:图片地址,
					icon: "./Test/1.ico"
				});
			notification.onclick = function() {
				notification.close();
				alert('提醒已关闭');
			};
		}
	};
	if (Notification.permission == "granted") {
		popNotice();
	} else if (Notification.permission != "denied") {
		Notification.requestPermission(function (permission) {
			popNotice();
		});
	}
}
function btn_on() {
	btn.disabled=false;
}