window.onload = function(){
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
}

function previewHandler(){
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");
	fillBackgroundColor(canvas, context);

	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	if (shape == "squares"){
		for (var squares = 0; squares < 20; squares++){
			drawSquare(canvas, context);
		}
	} else if (shape == "circles") {
		for (var squares = 0; squares < 20; squares++){
			drawCircle(canvas, context);
		}
	}
	drawText(canvas, context);
	drawImage(canvas, context);
}

function fillBackgroundColor(canvas, context){
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var color = selectObj[index].value;
	context.fillStyle = color;
	context.fillRect(0, 0, 600, 200);
}

function drawSquare(canvas, context){
	var w = Math.random() * 40;
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	context.fillStyle = "lightblue";
	context.fillRect(x, y, w, w);
}

function drawCircle(canvas, context){
	var radius = Math.floor(Math.random() * 40);
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);
	context.fillStyle = "lightblue";
	context.fill();
}

function drawText(canvas, context){
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20, 40);

	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shiry!", canvas.width-20, canvas.height-40);
}

function drawImage(canvas, context){
	var image = new Image();
	image.src = "1.png";
	image.onload = function(){
		context.drawImage(image, 20, 20, image.width, image.height);
	};
}



