<?php
	$to = "chaojiang.au@gmail.com";
	$name=$_REQUEST['name'];
	$phone = $_REQUEST['phone'] ;
	$email = $_REQUEST['email'] ;
	$subject= $_REQUEST['subject'] ;
	$headers = "From: $name - $subject";
	$message = "Message From $name with contact no: $phone"+"\n" +
				$_REQUEST['message'];
	
	$sent = mail($to, $subject, $message, $headers) ;
	if($sent)
	{
		print "Your mail was sent successfully"; 
	}
	else
	{
		print "We encountered an error sending your mail"; 
	}
?>
