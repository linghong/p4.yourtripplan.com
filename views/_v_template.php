<!DOCTYPE html>
<html>
	<head>
		<title><?php if(isset($title)) echo $title; ?></title>

		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

		<!-- Common CSS/JSS -->
		<link rel="stylesheet" href="/css/style.css" type="text/css">
					
		<!-- Controller Specific JS/CSS -->
		<?php if(isset($client_files_head)) echo $client_files_head; ?>
	
	</head>

	<body>	
		
		<!-- Site Name-->
		<div class="sitetitle">
			SAT Vocabulary Helper
		</div>

		<!-- Site Main body-->
		<div class="container">

		<!-- for users who are logged in, add Menu and Content-->
		<?php if($user): ?>
			
			<nav>
				<li><a href='/posts'>Message Board</a></li>
				<li><a href='/posts/myposts'>My Posts</a></li>
				<li><a href='/tests/'>Try Vocabulary Test</a></li>
				<li><a href='/tests/practice'>Practice Exercise</a></li>
				<li><a href = '/users/profile/'>My Profile</a></li>			
				<li><a href='/users/logout'>Log out</a></li>
			</nav>
			<article>
				<?php if(isset($content)) echo $content; ?>
			</article>

		<!-- for users who are not logged in, Sign up or login -->
			<?php else: ?>
				<div class="leftcolumn">
				<?php if(isset($content)) echo $content; ?>
				</div>

				<div class="rightcolumn">
					<div id="top">
						<?php if(isset($login)) echo $login; ?>
					</div>
					<div id="bottom">
						<?php if(isset($signup)) echo $signup; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
			<?php if(isset($client_files_body)) echo $client_files_body; ?>

	</body>
</html>