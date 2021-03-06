<!DOCTYPE html>
<html>
	<head>
		<title><?php if(isset($title)) echo $title; ?></title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<!-- Common CSS/JSS -->
		<link rel="stylesheet" href="/css/bootstrap.min.css">
    	<script src="/js/respond.min.js"></script>							
		<!-- Controller Specific JS/CSS -->
		<?php if(isset($client_files_head)) echo $client_files_head; ?>
	
	</head>

	<body>
		<div class="container">	
		<!-- Site Header.................................................Site Header-->
			<!--row1: Site Name-->
			<header class="row " >
				<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
					<img class="img-responsive" src="/uploads/edugym-logo.png" alt="logo">
				</div>
				<div class="col-lg-9 col-md-9 col-sm-9  headerslide">
					<div id="locations" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
							<div class="item active">
								<img src="/uploads/edugym-header7.jpg" alt="header">
							</div>
							<div class="item">
								<img src="/uploads/edugym-header2.jpg" alt="header">
							</div>
							<div class="item">
								<img src="/uploads/edugym-header6.jpg" alt="header">
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
							<li><a href='/tests/'>Vocabulary Test</a></li>
							<li><a href='/tests/practice'>Practice Exercise</a></li>
							<li><a href = '/users/profile/'>My Profile</a></li>			
							<li><a href='/users/logout'>Log out</a></li>
						</ul>
					</div>
				</nav>
			</div>

			<!--row3 -->
			<div class="row ">
				<article class="frontbox col-md-7 colsm-7 col-xs-12">
					<div></div>				
					<?php if(isset($content)) echo $content; ?>
				</article>

				<aside class="col-md-5 col-sm-5 col-xs-12">
					<div class="col-md-offset-2 col-md-10 col-md-12 col-xs-12 ">
						<?php if(isset($login)) echo $sidebar; ?>
					</div>
				</aside>
			</div>

			<!-- for users who are not logged in, Sign up or login -->
			<?php else: ?>
			<!--row2: navigation -->

				<nav class="row navbar navbar-default" role="navigation">
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
							<li><a href='/users/lessons'>Vocabulary Lessons</a></li>
							<li><a href='/users/about'>How Does It Work</a></li>

						</ul>
					</div>
				</nav>


			<!--row3 -->
			<div class="row ">
				<section class="frontbox col-md-7 col-sm-12">
					<div></div>				
					<?php if(isset($content)) echo $content; ?>
				</section>
				<aside class="col-md-5 col-sm-12">
					<div class="col-md-offset-1 col-md-10 col-sm-5 col-xs-12 ">
							<?php if(isset($login)) echo $login; ?>
					</div>

					<div class="col-md-12 col-sm-offset-1 col-sm-6 col-xs-12">
							<?php if(isset($signup)) echo $signup; ?>
					</div> 
				</aside>
			</div>
			<?php endif; ?>

		<footer>
				©edugym since 2014 | <a href="/">Home</a>|<a href="/">About</a>|<a href='/contact'>Contact Us</a>|
		</footer>

		</div><!-- end container -->	
			

		 <!-- modal windows -->
		<div id="vocabularycard" class="modal fade" tabindex="-1">
			<div class="modal-dialogue">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close glyphicon glyphicon-remove" data-dismiss="modal"></button>
						<h1 class="modal-title">Vocabulary Card</h1>			
					</div>
					<div class="row modal-body">
						<div class="vocabulary"></div>
					</div>
					<div class="modal-footer">
						<button class="btn btn-royalty close" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>


		<script src="/js/jquery.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>

		<?php if(isset($client_files_body)) echo $client_files_body; ?>

	</body>
</html>