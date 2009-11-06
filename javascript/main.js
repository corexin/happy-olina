$(document).ready(function() { 
	String.prototype.Trim   =   function(){  
		return   this.replace(/(^\s*)|(\s*$)/g,   "");  
	}
	  
	var options = { 
        target:        '#sendEmailResult',   // target element(s) to be updated with server response 
        beforeSubmit:  validate,  // pre-submit callback 
        //success:       showResponse  // post-submit callback 
 
        // other available options: 
        //url:       url         // override for form's 'action' attribute 
        //type:      'post'        // 'get' or 'post', override for form's 'method' attribute 
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
        //clearForm: true        // clear all form fields after successful submit 
        //resetForm: true        // reset the form after successful submit 
 
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
			fieldNames +="Name";
		}
		
		if(!form.phone.value.trim() || !form.email.value.trim())
		{
			fieldNames +=", Phone or Email";
		}

		if(fieldNames != "")
		{
			alert(fieldNames + " can not be empty!");
			return false;
		}
		return true;
	}
}); 
		
 
 