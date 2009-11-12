<?php include("header.php"); ?>

<div id="container">

	<div id="header"></div>
	
	<div id="content">
		 <?php include("nav.php"); ?>
		<div id="mainFrame">
			<div id="contactInfo">
				<h2 class="alignLeft">Contact Information</h2>
				<ul>
					<li><span class="label">Address:</span> Brisbane Southside, QLD 4116</li>
					<li><span class="label">Email:</span> info@happyolina.com.au</li>
					<li><span class="label">Telephone:</span> 07 3711 6840</li>
					<li><span class="label">Fax:</span> 07 3711 6840</li>
					<li><span class="label">Mobile:</span> 0422 188 315</li>
					<li><span class="label">Web:</span> www.happyolina.com.au</li>
				</ul>
			</div>
			<hr/>
			<h2>Contact us via form</h2>
			<p id="sendEmailResult" class='postback'></p>

			<form id="sendEmailForm" method="post" action="sendEmail.php">
				<p class="item">
					<span class="label">Title:</span><select name="title">
						<option name="mr">Mr</option>
						<option name="ms">Ms</option>
						<option name="mrs">Mrs</option>
						<option name="miss">Miss</option>
					</select>
				</p>
				<p class="item"><span class="label">Full Name:</span><input name="name" type="text"></input></p>
				<p class="item"><span class="label">Phone:</span><input name="phone" type="text"></input></p>
				<p class="item"><span class="label">Email:</span><input name="email" type="text"></input></p>
				<p class="item"><span class="label">Subject:</span><input name="subject" type="text"></input></p>
				<p class="item"><span class="label-top">Enquiry:</span><textarea name="message" rows="8"></textarea></p>
				<p class="item"><input id="sendEmailButton" type="submit" value="Submit" />&nbsp;<input type="reset" name="resetButton " value="Reset" /></p>

			</form>

		</div>
	</div>
	
	<?php include("footer.php"); ?>