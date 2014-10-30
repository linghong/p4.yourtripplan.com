<div class ="row">
	<div class="title">
		Let's Do A Vocabulary Practice Exercise
	</div>		
</div>
<div class ="row">
	<div id="practicetitle">
		<P>The vocabulary of the practice library starts with a, ends with z. It is equally divided into four sections.</p> 
		<p>You can study any below section you want to work with. To view all the vocabulary on a section, click the section number button. A window that lists all the vocabulary on this section will pop up. 

		<p>After you finish viewing all of the words in this section, you can close the window, then click the "Section Test" button. The practice test section will give you a word from this section and the four explanation choices. You should pick up the correct explaination choice from the four listed choices. Keep on clicking the "Next" button to answer a new word question. The site will automactically drops out of the words you are familiar with from that section's vocabulary library, but let you practice more for the words that you haven't grasped. Thus you will meet the word that you made more times of wrong choice more frequently. By this way, you'll learn new vocabulary fast.</p>
	</div>
</div>

<div class="row vocabulary_practice">
	<p>Now click the section button to study to memorize vocabulary.</p>
	
	<?php 
		$numbers=array("One","Two","Three","Four","Five","Six","Seven","Eight");
		$letters=array('"A"-"C"','"C"-"E"','"E"-"H"','"H"-"K"','"A"-"C"','"C"-"E"','"E"-"H"','"H"-"K"');
		for($i = 0; $i<8;$i++): 
		?>
		<div class="panel panel-royalty col-lg-6 col-md-6"> 
			<a href="#vocabularycard" data-toggle="modal" class="vocabulary_section title">Section <?php echo $numbers[$i]; ?></a>
			<p>Words beginning with the letter <?php echo $letters[$i]; ?></p>	
			<button class="button btn-royalty btn-wide start_practice">Section <?php echo $numbers[$i]; ?> Test</button>
		</div>
	<?php endfor;  ?>
	
	<div class="panel col-lg-offset-3 col-lg-3 col-md-offset-3 col-md-3">  
		<button class="btn btn-royalty btn-xl start_practice">Test For All Sections </button>				
	</div>
</div >

<div class ="row">
	<div id="nextword" ></div>
	<div class="practice_word"></div>
	<div class="result"></div>	
	<div  id="practice_submit"></div>	
</div>					
<div id="re_load"></div>
