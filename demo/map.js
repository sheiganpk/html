
window.onload = function(){
	createMap();
	createMarker();
	createPlugin();
}

function createPlugin(){
	AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
	})
}

function createMarker(){
	var marker = new AMap.Marker({
		position: [116.480983, 39.989628],
		map: map
	});

	var infowindow = new AMap.InfoWindow({
		content:"<h3>标题</h3><div>小标题</div>",
		offset: new AMap.Pixel(0, -30),
		size:new AMap.Size(100, 0)
	});

	var clickHandle = AMap.event.addListener(marker, "click", function(){
		infowindow.open(map, marker.getPosition());
	});
	//AMap.event.removeListener(clickHandle);
}


function createMap(){
	map = new AMap.Map('container');
	map.setZoom(10);
	map.setCenter([116.39, 39.9]);
}