$(document).ready(function() { 

	var options = { 
        target:        '#sendEmailResult',  // target element(s) to be updated with server response 
        beforeSubmit:  validate,  // pre-submit callback 
        //success:       showResponse  // post-submit callback 
 
        // other available options: 
        //url:       url         // override for form's 'action' attribute 
        //type:      type        // 'get' or 'post', override for form's 'method' attribute 
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
        //clearForm: true        // clear all form fields after successful submit 
        resetForm: true        // reset the form after successful submit 
 
        // $.ajax options can be used here too, for example: 
        //timeout:   3000 
    }; 
	$('#sendEmailForm').ajaxForm(options); 
	
	function validate(formData, jqForm, options) 
	{
		var form = jqForm[0];
		var fieldNames = "";
		if(!form.name.value)
		{
			fieldNames +="[Name]";
		}
		
		if(!form.phone.value && !form.email.value)
		{
			fieldNames +=" [Phone or Email]";
		}

		if(fieldNames != "")
		{
			alert(fieldNames + " can not be empty!");
			return false;
		}
		return true;
	}
	
	/** copy from internet */
	$(window).scroll(
		function() {
			var diffY = $(window).scrollTop();//页面现在的位置和滚动条顶端的距离[scrollTop()]
			var diffH = $(window).height()-150;//设计者期望的浮动栏与浏览器顶端的距离[height()],这里是与浏览器顶端保持1/4个页面的高度,如果diffH的值设置成0,浮动栏就会落在屏幕顶端
			var percent=diffY+diffH; //percent将被赋值给css中的"top"属性,作为浮动栏的新高度值
			if(percent<0){      //判断percent的值是否小于0,小于0就凑整,大于0就忽略小数部分
				percent=Math.ceil(percent);
			}else{
				percent=Math.floor(percent); //取整
				var contact = percent+"px"; 
				var toTop = percent+100+"px"; 
				$("#float-div").css("top",contact);
				$("#toTop").css("top",toTop);
			}
		}
	);
	
	$(window).bind("resize", 
		function() {
			var diffY = $(window).scrollTop();//页面现在的位置和滚动条顶端的距离[scrollTop()]
			var diffH = $(window).height()-150;//设计者期望的浮动栏与浏览器顶端的距离[height()],这里是与浏览器顶端保持1/4个页面的高度,如果diffH的值设置成0,浮动栏就会落在屏幕顶端
			var percent=diffY+diffH; //percent将被赋值给css中的"top"属性,作为浮动栏的新高度值
			if(percent<0){      //判断percent的值是否小于0,小于0就凑整,大于0就忽略小数部分
				percent=Math.ceil(percent);
			}else{
				percent=Math.floor(percent); //取整
				var contact = percent+"px"; 
				var toTop = percent+100+"px"; 
				$("#float-div").css("top",contact);
				$("#toTop").css("top",toTop);
			}
		}
);
	
	// initialize
	$("#float-div").css("top",$(window).height()-150 + "px");
	$("#float-div").show();
		
	// setup popup window in product list
	imagePreview();
}); 


/*
 * Image preview script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
this.imagePreview = function(){	
	/* CONFIG */
		
		xOffset = 10;
		yOffset = 30;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result
		
	/* END CONFIG */
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";	
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img src='"+ this.href +"' alt='Image preview' />"+ c +"</p>");								 
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){
		this.title = this.t;	
		$("#preview").remove();
    });
	
	$("a.preview").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});
	$("a.preview").click(function(){
		return false;
	});	
};
		
 
 