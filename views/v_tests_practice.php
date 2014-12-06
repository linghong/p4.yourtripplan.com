<section class="panel panel-info">
	<aside class="row">
		<div class="col-md-6  pull-right">
			<form role="form">
				<legend>
				    Before Starting Your Lesson, Let's First Give A Wish 
				</legend>
				<div class="form-group name-group">	
					<label for="background" class="control-label">Adding more images for the Canvas:</label>
					<select id="image"	>
						<option checked>Please select one:</option>
							<option value="leaf">Leaf</option>
							<option value="star">Star</option>
					</select>
				</div>
				<div class="form-group name-group">
					<label for="canvastext" class="control-label">Change the Text in the Canvas:</label><br>
					<label for="line1" class="control-label">1-4 Words in line 1 :  </label><input type="text" id="line1"><br>
					<label for="line2" class="control-label">1-2 Words in line 2 :   </label><input type="text" id="line2"><br>
					<label for="line3" class="control-label">2-5 Words in line 3 :</label><input type="text" id="line3">
				</div>
			</form>

			<button class="btn btn-royalty btn-wide" id="play">Add Your Change To the Canvas</button>
			<button class="btn btn-royalty btn-wide" id="clear">Remove Effect from the Canvas</button>			
		</div>

		<div class="col-md-6 pull-left" >
			<canvas width="680" height="390" id="animation">
			</canvas>
	 	</div>
	</aside>

	<main class ="row">
		<div class="col-md-12 title">
			Let's Do A Vocabulary Practice Exercise
		</div>		

		<div class="col-md-12" id="practicetitle">
			<P>The practice vocabulary library is equally divided into several sections. You can study any section at any time. Click the blue link of each section to view the vocabulary. A window that lists all the vocabulary belonging to that section will pop up. </p>	 
			<p>After finish viewing all of the words in this section, close the window, then click the "Section Test" button. The practice test section will give you a word and the four explanation choices for you to select the correct one. Keep on clicking the "Next" button to answer a new word question. The site will automactically drops out of the words you are familiar with, and let you practice more for the words that you haven't grasped. By meeting the words that you made more times of wrong choice more frequently, you'll learn new vocabulary fast.</p>
			<h3>Now click the section button to study to memorize vocabulary.</h3>
		</div>
		<div class="col-md-12 vocabulary_practice">	
			<?php 
				$numbers=array("One","Two","Three","Four","Five","Six","Seven","Eight");
				$letters=array('"A"-"C"','"C"-"E"','"E"-"H"','"H"-"K"','"A"-"C"','"C"-"E"','"E"-"H"','"H"-"K"');
				for($i = 0; $i<8;$i++): 
				?>
				<div class="panel col-lg-6 col-md-6"> 
					<a href="#vocabularycard" data-toggle="modal" class="vocabulary_section title">Section <?php echo $numbers[$i]; ?></a>
					<p>Words beginning with the letter <?php echo $letters[$i]; ?></p>	
					<button class="button btn-royalty btn-wide start_practice">Section <?php echo $numbers[$i]; ?> Test</button>
				</div>
			<?php endfor;  ?>
		</div >	
		<div class="col-md-offset-4 col-md-4">  
			<button class="btn btn-royalty btn-xl start_practice">Test For All Sections </button>				
		</div>

		<div class ="col-md-12">
			<div id="nextword" ></div>
			<div class="practice_word"></div>
			<div class="result"></div>	
			<div  id="practice_submit"></div>	
		</div>					
		<div id="re_load"></div>
	</main>
</section>