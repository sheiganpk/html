$(function(){
	//id为one的元素
	//$('#one').css("background","#bbffaa");
	//class为mini的元素
	//$('.mini').css("background","#bbffaa");
	//div元素
	//$('div').css("background", "#bbffaa");
	//所有元素
	//$('*').css("background", "#bbffaa");
	//span元素和id为two的元素
	//$('span, #two').css("background", "#bbffaa");
	//body内的所有div元素
	//$('body div').css("background", "#bbffaa");
	//body内的子div元素
	//$('body > div').css("background", "#bbffaa");
	//class为one的下个div元素
	//$('.one + div').css("background", "#bbffaa");
	//$('.one').next("div").css("background", "#bbffaa");
	//id为two的元素后面所有div兄弟元素
	//$('#two ~ div').css("background", "#bbffaa");
	//$('#two').nextAll("div").css("background", "#bbffaa");
	//id为two的元素前后所有div兄弟元素
	//$('#two').siblings("div").css("background", "#bbffaa");

	//过滤选择器
	//第一个div元素
	//$('div:first').css("background", "#bbffaa");
	//最后一个div元素
	//$('div:last').css("background", "#bbffaa");
	//class不为one的div元素
	//$('div:not(.one)').css("background", "#bbffaa");
	//索引值为偶数的div元素
	//$('div:even').css("background", "#bbffaa");
	//索引值为奇数的div元素
	//$('div:odd').css("background", "#bbffaa");
	//索引值等于3的div元素
	//$('div:eq(3)').css("background", "#bbffaa");
	//索引值大于3的div元素
	//$('div:gt(3)').css("background", "#bbffaa");
	//索引值小于3的div元素
	//$('div:lt(3)').css("background", "#bbffaa");
	//所有标题元素,h1,h2....
	//$(':header').css("background", "#bbffaa");
	//正在执行动画的背景色
	//$(":animated").css("background", "#bbffaa");

	//内容过滤选择器
	//含有文本di的div元素
	//$('div:contains(di)').css("background", "#bbffaa");
	//不包含子元素的div
	//$('div:empty').css("background", "#bbffaa");
	//含有class为mini的div元素
	//$('div:has(mini)').css("background", "#bbffaa");
	//含有子元素（包括文本）的div元素
	//$('div:parent').css("background", "#bbffaa");
	//所有可见的div元素
	//$('div:visible').css("background", "#bbffaa");
	//显示隐藏的div元素
	//$('div:hidden').show(1000);

	//属性过滤器
	//含有属性title的div元素
	//$('div[title]').css("background", "#bbffaa");
	//含有属性title并且值为"test"的元素
	//$('div[title=test]').css("background", "#bbffaa");
	//含有属性title并且值不为"test"的元素
	//$('div[title!=test]').css("background", "#bbffaa");
	//含有属性title并且值为"te"开头的元素
	//$('div[title^=te]').css("background", "#bbffaa");
	//含有属性title并且值为"est"结尾的元素
	//$('div[title$=est]').css("background", "#bbffaa");
	//含有属性title并且值含有"es"的元素
	//$('div[title*=es').css("background", "#bbffaa");	

	//子元素过滤选择器
	//class为one的div元素下的第2个子元素
	//$('div.one:nth-child(2)').css("background", "#bbffaa");
	//class为one的div元素下得第1个子元素
	//$('div.one:first-child').css("background", "#bbffaa");
	//class为one的div元素下得最后1个子元素
	//$('div.one:last-child').css("background", "#bbffaa");
	//class为one的div元素下只有1个子元素
	//$('div.one:only-child').css("background", "#bbffaa");

	//表单对象选择器
	//改变表单内可用input元素的值
	//$('#form1 input:enabled').val("这里变化了！");
	//改变表单内不可用input元素的值
	//$('#form1 input:disabled').val("这里变化了!");
	//获取选框中得个数
	//$('input:checked').length;
	//获取下拉框选中的内容
	//$('select:selected').text;
	//选取所有的input，textarea，select，button元素
	//$(':input')
	//选取所有的单行文本框
	//$(':text')
	//选取所有的密码框
	//$(':password')
	//选取所有的单选框
	//$(':radio')
	//选取所有的多选框
	//$(':checkbox')
	//选取所有的提交按钮
	//$(':submit')
	//选取所有的图像按钮
	//$(':image')
	//选取所有的重置按钮
	//$(':reset')
	//选取所有的按钮
	//$(':button')
	//选取所有的上传域
	//$(':file')
	//选取所有不可见元素
	//$(':hidden')

	//空格问题 含义不同
	//class为test的元素里面的隐藏元素
	//$('.test :hidden')
	//class为test的隐藏元素
	//$('.test:hidden')
})









