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
		
		if(!form.phone.value )
		{
			fieldNames +=" [Phone]";
		}

		if(!form.email.value)
		{
			fieldNames +=" [Email]";
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
			var diffY = $(window).scrollTop();//ҳ�����ڵ�λ�ú͹��������˵ľ���[scrollTop()]
			var diffH = $(window).height()-150;//����������ĸ���������������˵ľ���[height()],����������������˱���1/4��ҳ��ĸ߶�,���diffH��ֵ���ó�0,�������ͻ�������Ļ����
			var percent=diffY+diffH; //percent������ֵ��css�е�"top"����,��Ϊ���������¸߶�ֵ
			if(percent<0){      //�ж�percent��ֵ�Ƿ�С��0,С��0�ʹ���,����0�ͺ���С������
				percent=Math.ceil(percent);
			}else{
				percent=Math.floor(percent); //ȡ��
				var contact = percent+"px"; 
				var toTop = percent+100+"px"; 
				$("#float-div").animate({ top: contact},20 );
				$("#toTop").animate({top: toTop},20 );

			}
		}
	);
	
	$(window).bind("resize", 
		function() {
			var diffY = $(window).scrollTop();//ҳ�����ڵ�λ�ú͹��������˵ľ���[scrollTop()]
			var diffH = $(window).height()-150;//����������ĸ���������������˵ľ���[height()],����������������˱���1/4��ҳ��ĸ߶�,���diffH��ֵ���ó�0,�������ͻ�������Ļ����
			var percent=diffY+diffH; //percent������ֵ��css�е�"top"����,��Ϊ���������¸߶�ֵ
			if(percent<0){      //�ж�percent��ֵ�Ƿ�С��0,С��0�ʹ���,����0�ͺ���С������
				percent=Math.ceil(percent);
			}else{
				percent=Math.floor(percent); //ȡ��
				var contact = percent+"px"; 
				var toTop = percent+100+"px"; 
					$("#float-div").animate({ top: contact},20 );
				$("#toTop").animate({top: toTop},20 );
			}
		}
);
	
	// initialize
	$("#float-div").css("top",$(window).height()-150 + "px");
	$("#float-div").show();
	$("#toTop").css("top",$(window).height() -50 + "px");
		
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
	$("a.preview").mouseover(function(e){
		
		bigX = getX(e.currentTarget.firstChild) + e.currentTarget.firstChild.width;
		bigY = getY(e.currentTarget.firstChild) - 15;
		 
		this.t = this.title;
		this.title = "";
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img src='"+ this.href +"' alt='Image preview' />"+ c +"</p>");								 
		$("#preview")
			.css("top",bigY+ "px")
			.css("left",bigX + "px")
			.fadeIn("slow");						
    });

	$("a.preview").mouseout(function(e){
		this.title = this.t;	
		$("#preview").remove();
	});

	$("a.preview").click(function(e){
		return false;
	});
	
	function getY( oElement )
	{
		var iReturnValue = 0;
		while( oElement != null ) {
			iReturnValue += oElement.offsetTop;
			oElement = oElement.offsetParent;
		}
		return iReturnValue;
	}
		
		
	function getX( oElement )
	{
		var iReturnValue = 0;
		while( oElement != null ) {
			iReturnValue += oElement.offsetLeft;
			oElement = oElement.offsetParent;
		}
		return iReturnValue;
	}
};
		
 
 