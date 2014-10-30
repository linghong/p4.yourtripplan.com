<h2> Want to provide information to other students? Post here:</h2>
<form method='POST' action='/posts/p_add' class="row">
<textarea class="panel panel-info col-lg-12 col-md-12" name='content' id='content'></textarea>

<input class="button btn-info btn-md-wd col-lg-offset-8 col-md-offset-8" type='submit' value='submit'>

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
