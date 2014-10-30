<article class ="row">
	<h1>Vocabulary Lessons</h1>	
	<div id="practicetitle">
		<P>The vocabulary of the practice library is equally divided into several sections. You can study any section at any time. To view all the vocabulary in that section, click the blue link of that section. A window that lists all the vocabulary belonging to that section will pop up. </p>
		<p>You can also click the "Section Test" button to do the vocabulary test for this section. When your are doing the test, the site will automactically memorize the words you are familiar with, and let you meet more for the words that you haven't grasped. By this way, you'll learn new vocabulary fast.</p>
	</div>
</article>

<section class="row ">
	<div class="vocabulary_practice">
	 	<?php 
		$numbers=array("One","Two","Three","Four");
		$letters=array('"A"-"C"','"C"-"E"','"E"-"H"','"H"-"K"');
		for($i = 0; $i<4;$i++): 
		?>
		<div class="panel panel-royalty col-lg-6 col-md-6"> 
			<a href="#vocabularycard" data-toggle="modal" class="vocabulary_section title">Section <?php echo $numbers[$i]; ?></a>
			<p>Words beginning with the letter <?php echo $letters[$i]; ?></p>	
			<button class="button btn-royalty btn-wide start_practice">Section <?php echo $numbers[$i]; ?> Test</button>
		</div>
		<?php endfor;  ?>
	
		<div class="panel col-lg-offset-3 col-lg-3 col-md-offset-3 col-md-3"> 
			<a href="/users/login" class="btn btn-royalty btn-xl">More Sections</a>
		</div>				
	</div>
	<div id="nextword" ></div>
	<div class="practice_word"></div>
	<div class="result"></div>	
	<div id="practice_submit"></div>	
	<div id="re_load"></div>
</section>	


