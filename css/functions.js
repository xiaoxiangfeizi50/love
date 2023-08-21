// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	function time(time = +new Date()) {
		console.log(time)
		var date = new Date(time + 8 * 3600 * 1000); // 增加8小时
		return date.toJSON().substr(0, 19).replace('T', ' ');
	}

	var current = Date();
	var together = new Date("2023-04-14 22:25:00");//里面穿的格式只要符合要求就行例如： 2020/12/06   2020-12-06  时间不传默认00:00:00

	var seconds = (Date.parse(current) - Date.parse(together)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<font color='#DB7093'>第<span class=\"digit\">" + days + "</span> 天<span class=\"digit\">" + hours + "</span> 小时<span class=\"digit\">" + minutes + "</span> 分钟<span class=\"digit\">" + seconds + "</span> 秒了</font>"; 
	$("#clock").html(result);
}
