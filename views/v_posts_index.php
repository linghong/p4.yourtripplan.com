
<h1> Want to provide information to other students? Post here</h1>
<form method='POST' action='/posts/p_add'>
<textarea class="addpost" name='content' id='content'></textarea>

<br><br>
<input class="midright" type='submit' value='submit'>

</form>

<h1> Message Board </h1>

<?php  foreach($posts as $post): ?>
	<strong><?=$post['first_name']?>  posted on</strong>
	<time>
		<?=Time::display($post['created'])?>
	</time>
	<strong>:</strong>
	<div class="post">
	<?=$post['content']?>
	</div>

<?php endforeach; ?>
