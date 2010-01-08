<?php
	$to = "phdpp@hotmail.com,chaojiang.au@gmail.com";
	$name=$_REQUEST['name'];
	$phone = $_REQUEST['phone'] ;
	$email = $_REQUEST['email'] ;
	$subject= $_REQUEST['subject'] ;
	$message = "Message From $name with contact no $phone, email $email "."\n".$_REQUEST['message'];
	
	$sent = mail($to, $subject, $message) ;
	if($sent)
	{
		print "Your mail was sent successfully."; 
	}
	else
	{
		print "We encountered an error sending your mail, please try again later."; 
	}
?>
