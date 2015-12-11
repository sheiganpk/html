window.onload = function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	//矩形
	context.fillStyle = "blue";
	context.fillRect(0,0,100,100);
	//圆形
	context.fillStyle = "yellow";
	context.beginPath();
	context.arc(200, 200, 100, 0, 2 * Math.PI, true);
	context.fill();
	//文字
	context.fillStyle = "red";
	context.fillText("我的canvas", 500,	550);
	//图形
	var image = new Image();
	image.src = "1.png";
	image.onload = function(){
		context.drawImage(image, 20, 20, image.width, image.height);
	};
	//画线
	context.beginPath();
	context.moveTo(300, 300);
	context.lineTo(400, 400);
	context.lineTo(300, 400);
	context.closePath();
	//context.lineWidth = 2;
	context.stroke();
}