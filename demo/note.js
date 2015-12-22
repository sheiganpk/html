window.onload = function(){
	loadData();
}

function loadData(){
	var jsonStr = localStorage["json"];
	var array = JSON.parse(jsonStr);

	//dom
	var tbody = document.getElementById("tbody");
	var childNodes = tbody.childNodes;
	for (var i = 0; i < childNodes.length; i++){
		tbody.removeChild(childNodes[i]);
	}

	for (var i = 0; i < array.length; i++){
		var obj = array[i];
		var tr = document.createElement("tr");
		tbody.appendChild(tr);
		var thArray = [obj.name, obj.sex, obj.interest, obj.des];
		for (var j = 0; j < thArray.length; j++) {
			var td = document.createElement("td");
			td.innerHTML = thArray[j];
			tr.appendChild(td);
		}
	}
}

function saveData(){
	var nameEle = (document.getElementsByName("name"))[0];
	var sexEle = (document.getElementsByName("sex"))[0];
	var interestEles = document.getElementsByName("interest");
	var desEle = (document.getElementsByName("des"))[0];

	var interestStr = "";
	for (var i = 0; i < interestEles.length; i++){
		var interestEle = interestEles[i];
		if (interestEle.checked){
			interestStr += interestEle.value;
			if (i != interestEles.length - 1){
				interestStr += " ";
			}
		}
	}
	var obj = {
		"name":nameEle.value,
		"sex":sexEle.value,
		"interest":interestStr,
		"des":desEle.value,
	};

	var jsonStr = localStorage["json"];
	var array;

	if (!jsonStr){
		array = [];
	} else {
		array = JSON.parse(jsonStr);
	}


	array.push(obj);
	localStorage["json"] = JSON.stringify(array);
	loadData();
}





