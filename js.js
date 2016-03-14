//========== 背景  开始==========
$(function() {

	var Timerr;

	function aa() {
		for (var i = 0; i < 4; i++) {
			var m = parseInt(Math.random() * 700 + 100);
			var j2 = parseInt(Math.random() * 300 + 1200);
			var j = parseInt(Math.random() * 1600 + 000);
			var j1 = parseInt(Math.random() * 300 + 300);
			var n = parseInt(Math.random() * 10 + (-10));
			$('.div').prepend('<div><div><div><div><div></div></div></div></div></div>')
			$('.div').children('div').eq(0).css({
				'left': j,
				'top': n
			})
			$('.div').children('div').eq(0).animate({
				'left': j - j1,
				'top': $(window).height() + 20
			}, j2)

		}
	}
	aa();
	setInterval(function() {
		aa();
	}, 300)
	setInterval(function() {
		for (var jj = 0; jj < $('.div>div').size() / 4; jj++) {
			$('.div>div').eq($('.div>div').size() - jj).remove();
		}

	}, 1000)

})

//========== 背景  结束==========		

//=============准备工作 开始===================
var top = new Array();
top[0] = 0;
top[1] = 0;
top[2] = 0;
top[3] = 0;
top[4] = 0;
top[5] = 0;
top[6] = 0;
top[7] = 0;
top[8] = 0;
var get = 0;
var m = 1;
var left=Math.floor(Math.random() * 10);
$(document).ready(function(){
$("#start").click(function(){
	$(this).hide(100);
	$(".areaA,.areaB,.x0,.x1,.x2,.x3,.x4,.x5,.x6,.x7,.x8,#stop").removeClass("hidden");
	$(".x0").css("left",left +"%" );
	$(".x1").css("left",left+10 +"%" );
	$(".x2").css("left",left+20 +"%" );
	$(".x3").css("left",left+30 +"%" );
	$(".x4").css("left",left+40 +"%" );
	$(".x5").css("left",left+50 +"%" );
	$(".x6").css("left",left+60 +"%" );
	$(".x7").css("left",left+70 +"%" );
	$(".x8").css("left",left+80 +"%" );
})
	})

//=============准备工作 结束===================

//==========定义控制玩家移动  开始==========
function playerMove(event) {
	var x = event.clientX;
	var move = document.getElementById("player");
	move.style.left = (x - 25) + "px";
}
//==========定义控制玩家移动  结束==========

//================定义流星下落 开始==============
function fall() {
	if (top[id] >= 99) {
		top[id] = 0;
	} else {
		document.getElementById("x" + id).style.top = (top[id]++) + "%";		
	}
}
//================定义流星下落 结束==============		

//============定义销毁  开始================
function die0(){
	if(top[0]>60){
	document.getElementById("x0").style.backgroundImage = "url(images/starb.png)";
	top[0] = 0;	
	document.getElementById("x0").style.backgroundImage = "url(images/star.png)";
	}
}
function die1(){
	if(top[1]>60){
	document.getElementById("x1").style.backgroundImage = "url(images/starb.png)";
	top[1] = 0;
	document.getElementById("x1").style.backgroundImage = "url(images/star.png)";
	}
}
function die2(){
	if(top[2]>60){
	document.getElementById("x2").style.backgroundImage = "url(images/starb.png)";
	top[2] = 0;	
	document.getElementById("x2").style.backgroundImage = "url(images/star.png)";
	}
}
function die3(){
	if(top[3]>60){
	document.getElementById("x3").style.backgroundImage = "url(images/starb.png)";
	top[3] = 0;
	document.getElementById("x3").style.backgroundImage = "url(images/star.png)";
	}
}
function die4(){
	if(top[4]>60){
	document.getElementById("x4").style.backgroundImage = "url(images/starb.png)";
	top[4] = 0;	
	document.getElementById("x4").style.backgroundImage = "url(images/star.png)";
	}
}
function die5(){
	if(top[5]>60){
	document.getElementById("x5").style.backgroundImage = "url(images/starb.png)";
	top[5] = 0;	
	document.getElementById("x5").style.backgroundImage = "url(images/star.png)";
	}
}
function die6(){
	if(top[6]>60){
	document.getElementById("x6").style.backgroundImage = "url(images/starb.png)";
	top[6] = 0;	
	document.getElementById("x6").style.backgroundImage = "url(images/star.png)";
	}
}
function die7(){
	if(top[7]>60){
	document.getElementById("x7").style.backgroundImage = "url(images/starb.png)";
	top[7] = 0;	
	document.getElementById("x7").style.backgroundImage = "url(images/star.png)";
	}
}
function die8(){
	if(top[8]>60){
	document.getElementById("x8").style.backgroundImage = "url(images/starb.png)";
	top[8] = 0;	
	document.getElementById("x8").style.backgroundImage = "url(images/star.png)";
	}
}
//============定义销毁 结束================


//================定义得分 开始==============		
function getCounts(){
			//**鼓励玩家 开始**//	
		if( get == 100*m){
			    m++;
				alert("你好厉害，都已经接住了"+ get +"个流星了！继续加油哦！！")
				};
		//**鼓励玩家 结束**//	
			
			document.getElementById("getcounts").innerHTML = ++get;			
		}
//================定义得分 结束==============		


//================定义流星随机下落    开始===========================
function XL() {
		var star = Math.floor(Math.random() * 10);
		setInterval(function() {		
		if (star < 1) {
			id = 0;
			fall();
		} else if (star < 2) {
			id = 1;
			fall();
		} else if (star < 3) {
			id = 2;
			fall();
		} else if (star < 4) {
			id = 3;
			fall();
		} else if (star < 5) {
			id = 4;
			fall();
		} else if (star < 6) {
			id = 5;
			fall();
		} else if (star < 7) {
			id = 6;
			fall();
		} else if (star < 8) {
			id = 7;
			fall();
		} else if (star < 9) {
			id = 8;
			fall();
		}
	}, 50)
}

//================定义流星随机下落    结束===========================



//=========定义倒计时 开始========
function daojishi() {
	var times = 60;
	var s = setInterval(function() {
		XL();
		if (times == 0) {
			alert("时间到！您一共接住了"+ get +"个流星！");location.href="index.html";
			clearInterval(s);
			} else {
			document.getElementById("time").innerHTML = --times;
		}
	}, 1000)
}
		

//=========定义倒计时 结束========


//========================开始与结束= 开始===================
function Start(){daojishi();}
function Stop(){
	alert("游戏结束！您一共接住了"+ get +"个流星！");location.href="index.html";
}


//========================开始与结束= 结束===================

//=====================后续工作 开始====================
$(document).ready(function(){
$("#stop").click(function(){
	$("#start").show(100);
	$(".areaA,.areaB,.x0,.x1,.x2,.x3,.x4,.x5,.x6,.x7,.x8,#stop").addClass("hidden");
	
})
	})

//=====================后续工作 结束====================