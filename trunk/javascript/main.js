$('#sendEmailButton').onclick= function(){
	$.post("./sendEmail.php",function (responseText, textStatus, XMLHttpRequest){
			$('#emailResult').html(responseText);
		});
};