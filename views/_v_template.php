<!DOCTYPE html>
<html>
	<head>
		<title><?php if(isset($title)) echo $title; ?></title>

		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<!-- Common CSS/JSS -->
		<link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css">
    	<link rel="stylesheet" href="/css/style.css" type="text/css">
    	<script src="js/respond.min.js"></script>							
		<!-- Controller Specific JS/CSS -->
		<?php if(isset($client_files_head)) echo $client_files_head; ?>
	
	</head>

	<body>
		<div class="container">	
		<!-- Site Header.................................................Site Header-->
			<!--row1: Site Name-->
			<header class="row " >
				<div class="col-lg-2 col-md-3">
					<img class="img-responsive" src=../uploads/edugym-logo.png alt="logo" >
				</div>
				<div class="col-lg-10 col-md-9">
					<div id="locations" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="item active">
								<img src=../uploads/edugym-header3.jpg alt="header">
							</div>
							<div class="item">
								<img src=../uploads/edugym-header8.jpg alt="header">
							</div>
							<div class="item">
								<img src=../uploads/edugym-header9.jpg alt="header">
							</div>
						</div>
					</div>
				</div>
			</header>	

		<!-- Site Main body.............................................Site Main body-->
		<!-- for users who are logged in, add Menu and Content-->
		<?php if($user): ?>
			<!--row2: navigation -->
			<div class="row">
				<nav class="navbar navbar-default" role="navigation">
					<div class="navbar-header">
		                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse">
		                    <span class="sr-only">Toggle navigation</span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                </button>
	            	</div>
	            	<div class="collapse navbar-collapse" id="collapse">
						<ul class="nav navbar-nav">
							<li><a href='/posts'>Message Board</a></li>
							<li><a href='/posts/myposts'>My Posts</a></li>
							<li><a href='/tests/'>Try Vocabulary Test</a></li>
							<li><a href='/tests/practice'>Practice Exercise</a></li>
							<li><a href = '/users/profile/'>My Profile</a></li>			
							<li><a href='/users/logout'>Log out</a></li>
						</ul>
					</div>
				</nav>
			</div>

			<!--row3-->
			<div class="row">
				<article class = "col-lg-12">
					<?php if(isset($content)) echo $content; ?>
				</article>
			</div>


		<!-- for users who are not logged in, Sign up or login -->
		<?php else: ?>
			<!--row2: navigation -->
			<div class="row">
				<nav class="navbar navbar-default" role="navigation">
					 <div class="navbar-header">
		                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#collapse">
		                    <span class="sr-only">Toggle navigation</span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                    <span class="icon-bar"></span>
		                </button>
	            	</div>
	            	<div class="collapse navbar-collapse" id="collapse">
						<ul class="nav navbar-nav">
							<li><a href='/'>Home</a></li>
							<li><a href='/tests/practice'>Vocabulary Lessons</a></li>
							<li><a href='/users/signup'>Signup</a></li>

						</ul>
					</div>
				</nav>
			</div>

			<!--row3 -->
			<div class="row">
				<aside class="col-lg-7 col-md-7 col-sm-12">
					<?php if(isset($content)) echo $content; ?>
				</aside>

				<article class="col-lg-5 col-md-5 col-sm-12">

					<div id="top" class="col-lg-offset-2 col-lg-10 col-md-offset-2 col-md-10 col-sm-5 col-xs-12 ">
						<?php if(isset($login)) echo $login; ?>
					</div>

					<div id="bottom" class="col-lg-12 col-md-12 col-sm-offset-1 col-sm-6 col-xs-12">
						<?php if(isset($signup)) echo $signup; ?>
					</div> 
				</article>
			</div>

		<?php endif; ?>

		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="js/bootstrp.min.js"></script>

		<?php if(isset($client_files_body)) echo $client_files_body; ?>

	</body>
</html>