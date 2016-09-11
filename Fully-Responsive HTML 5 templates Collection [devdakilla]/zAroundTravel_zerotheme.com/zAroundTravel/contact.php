<?php
// Free html5 templates : www.zerotheme.com

$text = "<span style='color:red; font-size: 35px; line-height: 40px; magin: 10px;'>Error! Please try again.</span>";

if(isset($_POST['name']))
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];

	$to = "youremail@gmail.com";
	$subject = "Zerotheme - Testing Contact Form";
	$message = " Name: " . $name ."\r\n Email: " . $email . "\r\n Message:\r\n" . $message;
	 
	$from = "Zerotheme";
	$headers = "From:" . $from . "\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
	 
	if(@mail($to,$subject,$message,$headers))
	{
	  $text = "<span style='color:blue; font-size: 35px; line-height: 40px; margin: 10px;'>Your Message was sent successfully !</span>";
	}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<title>Contacts</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<link rel="stylesheet" href="css/reset.css" type="text/css" media="all">
<link rel="stylesheet" href="css/style.css" type="text/css" media="all">
<link rel="stylesheet" href="css/zerogrid.css" type="text/css" media="all">
<link rel="stylesheet" href="css/responsive.css" type="text/css" media="all">
<link rel="stylesheet" href="css/contactform.css">
<script type="text/javascript" src="js/jquery-1.4.2.js" ></script>
<script type="text/javascript" src="js/cufon-yui.js"></script>
<script type="text/javascript" src="js/cufon-replace.js"></script>  
<script type="text/javascript" src="js/Myriad_Pro_600.font.js"></script>
<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
<!--[if lt IE 9]>
	<script type="text/javascript" src="http://info.template-help.com/files/ie6_warning/ie6_script_other.js"></script>
	<script type="text/javascript" src="js/html5.js"></script>
<![endif]-->
</head>
<body id="page2">
<div class="extra">
	<div class="main zerogrid">
<!-- header -->
		<header>
			<div class="row">
				<h1><a href="index.html" id="logo">Around the World</a></h1>
				<div class="right">
					<div class="wrapper">
						<form id="search" action="" method="post">
							<div class="bg">
								<input type="submit" class="submit" value="">
								<input type="text" class="input">
							</div>
						</form>
					</div>
					<div class="wrapper">
						<nav>
							<ul id="top_nav">
								<li><a href="#">Register</a></li>
								<li><a href="#">Log In</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</nav>
					</div>	
				</div>
			</div>
			<nav class="row">
				<ul id="menu">
					<li><a href="index.html" class="nav1">Home</a></li>
					<li><a href="About.html" class="nav2">About Us </a></li>
					<li><a href="Tours.html" class="nav3">Our Tours</a></li>
					<li><a href="Destinations.html" class="nav4">Destinations</a></li>
					<li class="end"><a href="contact.html" class="nav5">Contacts</a></li>
				</ul>
			</nav>
			<div class="row headerextra">
				<div class="col-2-3"><div class="wrap-col">
					<div class="text">
						<img src="images/text1.jpg" alt="">
						<h2>The Best Offers</h2>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
						<a href="#" class="button">Read More</a>
					</div>
				</div></div>
				<div class="col-1-3 col-extra"><div class="wrap-col">
					<div class="img"><img src="images/img2.jpg" alt=""></div>
				</div></div>
			</div>
		</header>
<!-- / header -->
<!-- content -->
		<section id="content">
			<article class="col-1-3"><div class="wrap-col">
				<h3>Hot Travel</h3>
				<div class="pad">
					<div class="wrapper under">
						<figure class="left marg_right1"><img src="images/page1_img1.jpg" alt=""></figure>
						<p class="pad_bot2"><strong>Italy<br>Holidays</strong></p>
						<p class="pad_bot2">Lorem ipsum dolor sit amet, consect etuer adipiscing.</p>
						<a href="#" class="marker_1"></a>
					</div>
					<div class="wrapper under">
						<figure class="left marg_right1"><img src="images/page1_img2.jpg" alt=""></figure>
						<p class="pad_bot2"><strong>Philippines<br>Travel</strong></p>
						<p class="pad_bot2">Lorem ipsum dolor sit amet, consect etuer adipiscing.</p>
						<a href="#" class="marker_1"></a>
					</div>
					<div class="wrapper">
						<figure class="left marg_right1"><img src="images/page1_img3.jpg" alt=""></figure>
						<p class="pad_bot2"><strong>Cruise<br>Holidays</strong></p>
						<p class="pad_bot2">Lorem ipsum dolor sit amet, consect etuer adipiscing.</p>
						<a href="#" class="marker_1"></a>
					</div>
				</div>
        	</div></article>
			<article class="col-2-3"><div class="wrap-col">
				<h2>Contact Form</h2>
				<div id="zContact_form">
	        
		        	<!--Warning-->
					<center><?php echo $text;?></center>
					<!---->
					
					<strong>Hello !! You can send message to us.</strong>
					<form name="form1" id="ff" method="post" action="contact.php">
						 <label>
						 Name*:
						 <input type="text" placeholder="Please enter your name" name="name" id="name" required>
						 </label>
					 
						 <label>
						 Email*:
						 <input type="email" placeholder="youremail@gmail.com" name="email" id="email" required>
						 </label>
							
						 <label>
						 Message*:
						 <textarea name="message" id="message">Please enter your message</textarea>
						 </label>
					 
						 <input class="sendButton" type="submit" name="Submit" value="Send">
						 
					</form>
				</div>
        	</div></article>
		</section>
<!-- / content -->
	</div>
	<div class="block"></div>
</div>
<div class="body1">
	<div class="main">
<!-- footer -->
		<footer>
			<a rel="nofollow" href="http://www.zerotheme.com/" target="_blank">Free HTML5 Templates</a> designed by <a rel="nofollow" href="http://www.templatemonster.com/" target="_blank">TemplateMonster</a> | <a rel="nofollow" href="http://www.zerotheme.com/" target="_blank">Zerotheme</a><br>
		</footer>
<!-- / footer -->
	</div>
</div>
<script type="text/javascript"> Cufon.now(); </script>
</body>
</html>