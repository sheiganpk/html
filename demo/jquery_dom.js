$(function(){
	//获取ul中第2个li节点，并打印节点的文本内容
	/*
	var $li = $("ul li:eq(1)");
	var li_txt = $li.text();
	alert(li_txt);
	*/

	//获取属性节点并打印出文本内容
	/*
	var p_txt = $('p').attr("title");
	alert(p_txt);
	*/

	/*
	//基本节点操作
	var $li_1 = $("<li title='香蕉'>香蕉</li>");
	var $li_2 = $("<li title='雪梨'>雪梨</li>");
	var $li_3 = $("<li title='西瓜'>西瓜</li>")
	$("ul").append($li_1);
	$("ul").prepend($li_2);
	$li_2.after($li_3);
	$li_2.after($li_3.clone());
	$li_2.before($li_3);
	//$li_1.remove();
	//$li_2.empty(); //清空元素中得所有后代节点
	

	//替换节点
	$("p").replaceWith("<strong>你最不喜欢的水果是？</strong>");

	//包裹节点 用b把strong包裹起来
	$("strong").wrap("<b></b>");

	//获取title属性
	$("p").attr("title");
	//修改title属性的值
	$("p").attr("title", "新标题");
	//删除属性
	$("p").removeAttr("title");

	//追加样式类
	$("p").addClass("another")

	//切换样式
	$("p").toggleClass("another");

	//移除样式类
	$("p").removeClass("another");

	//相当于js中得innerHTML属性
	$("p").html("<p>哈哈哈</p>");

	//相当于js中得innerText属性
	$("p").text("哈哈哈");

	//相当于js中得value属性,文本框，下拉列表，单选框，多选框等等。。
	$("p").val();

	//子元素集合
	$("p").children();

	//下一个同辈元素
	$("p").next();

	//前一个同辈元素
	$("p").prev();

	//前后所有同辈元素
	$("p").siblings();

	//匹配最近的元素，当前不匹配，向上级查找直到找到
	$("p").closest();

	//元素在当前视窗的偏移，包含top和left两个属性
	$("p").offset();

	//元素对于父节点的相对偏移，也包含以上两个属性
	$("p").position();

	//元素的滚动条距顶端的距离和左端的距离
	$("p").scrollTop();
	$("p").scrollLeft();
	*/

	$("#panel h5.head").bind("click", function(event){
		alert(event.target);
		var $content = $(this).next("div.content");
		if ($content.is(":visible")){
			$content.hide();
		} else {
			$content.show();
		}
	})

	$("p").hover(function(){
		$(this).html("天气不错");
	}, function(){
		$(this).html("天气太差了");
	});
})









