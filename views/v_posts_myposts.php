<?php  if(!$posts): ?>
	<h3> You have no posts posted yet.</h3>
<?php  endif; ?>

<?php  foreach($posts as $post): ?>


	<strong><?=$post['first_name']?>  posted on</strong>
	<time>
		<?=Time::display($post['created'])?>
	</time>
	<strong>:</strong>
	<div class="panel panel-post">
	<?=$post['content']?>
	</div>

<?php endforeach; ?>