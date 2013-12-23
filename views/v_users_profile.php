<?php foreach($users as $user): ?>
	<img src="/uploads/avatars/<?=$user['avatar'] ?>" height="120" width="120">
	<a href='/users/avatar'>Change My Avatar</a>
	<div class="profile">
		<h1>My Profile</h1> 
		<p><span>First Name:</span> <?=$user['first_name']?></p>
		<p><span>Last Name: </span><?=$user['last_name']?></P>
		<p><span>Account Created:</span><?=Time::display($user['created'])?></p>
		<p><span>Email: </span><?=$user['email']?></p>
	</div>
<?php endforeach ?>
