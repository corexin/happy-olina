$(document).ready(function() { 
	String.prototype.Trim   =   function(){  
		return   this.replace(/(^\s*)|(\s*$)/g,   "");  
	}
	  
	var options = { 
        target:        '#sendEmailResult',   // target element(s) to be updated with server response 
        beforeSubmit:  validate,  // pre-submit callback 
 
        // other available options: 
        //url:       url         // override for form's 'action' attribute 
        //type:      'post'        // 'get' or 'post', override for form's 'method' attribute 
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
		if(!form.name.value.trim())
		{
			fieldNames +="[Name]";
		}
		
		if(!form.phone.value.trim() && !form.email.value.trim())
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
	
	$(window).scroll( function() { //这个函数可以监视浏览器滚动条,只要滚动条一移动,此函数就触发
			var diffY = $(window).scrollTop();//页面现在的位置和滚动条顶端的距离[scrollTop()]
			var diffH = $(window).height()-125;//设计者期望的浮动栏与浏览器顶端的距离[height()],这里是与浏览器顶端保持1/4个页面的高度,如果diffH的值设置成0,浮动栏就会落在屏幕顶端
			var percent=diffY+diffH; //percent将被赋值给css中的"top"属性,作为浮动栏的新高度值
			if(percent<0){      //判断percent的值是否小于0,小于0就凑整,大于0就忽略小数部分
				percent=Math.ceil(percent);
			}else{
				percent=Math.floor(percent); //取整
				var v = percent+"px"; //css的属性需要一个单位,这里是px
				$("#float-div").css("top",v);//percent被赋值给top属性,浏览器根据这个值动态的调整浮动栏的高度,如果按照上面给的代码,这个高度将正好让浮动栏一直保持在屏幕中央
			}
		});
		// initialize
		$("#float-div").css("top",$(window).height()-125 + "px");
		$("#float-div").show();
			
}); 
		
 
 