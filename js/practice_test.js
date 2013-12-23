
/*==============================================================================================================================
For Word Practice Exercise Page
================================================================================================================================*/

/*---------------------------------------------------------------------------------------                
	Set up word practice array library
---------------------------------------------------------------------------------------*/
	//Set for each word order 
	var i=0;

	//compare to find whether the answer is correct.If not, show correct answer
 	correct_answer_number=0;
   	wrong_answer_number =0;
	question_number = 0;

	//Generate a word practice array.
	practiceVocabulary = newVocabulary;
	practiceExplanations = vocabularyExplanations;

$('#start_practice').click(function(){


	//Question number increase by each click
	i=i+1;

	//New  buttons
	$("#subtitle").html('Keep on clicking the "start" button and answering every question. According to your performance, the site will automactically drops out any words you are familiar with from the practice library, but let you practice more for the words you have not grasped. You can also check your performance by clicking the "Check Score" button.');
	$("#re_load").html('<input type ="submit"  class="re_start" id="practice_reload" value="Reload to Start a New Test">');
	$("#practice_submit").html('<input type ="submit"  id="check_exerciseanswer" value="Check Answer for this Word"><br><input type ="submit"  id="check_result" value="Check My Test Score"><br><br>');

	//Generate a random number used for selecting test word and the explanation.(Only 50 words from the library for practice)
	words_count=50;
	random_number0 = Math.floor(Math.random()*words_count);

/*----------------------------------------------------------------------------------------
Produce a word for testing and the four explanation choices
----------------------------------------------------------------------------------------*/
	//Pick up four wordexplanation choice from explanationchoice library
	explanationchoice(random_number0,50, vocabularyExplanations);

	//Print out the test word and the four explanations
	$(".practice_word").html("Question "+i+". "+ practiceVocabulary[random_number0]+
	'<br><input type="radio" name="answer" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
	'<br><input type="radio" name="answer" class="questions" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+
	'<br><input type="radio" name="answer" class="questions" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+
	'<br><input type="radio" name="answer" class="questions" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'<br><br>'
	);

/*----------------------------------------------------------------------------------------     
Check if the answer is correct
----------------------------------------------------------------------------------------*/
  	$('#check_exerciseanswer').one("click", function(){

 		//find which radio button is checked
		var answer =$('input:radio[name="answer"]:checked').val();

 		//variable to store correct and wrong answer numbers and questions have answered
 		practice_word = practiceVocabulary[random_number0];
  		correct_explanation = practiceExplanations[random_number0];

		//compare the checked answer to correct answer. Tell the answer results and count the correct the correct and wrong answer numbers
		if (answer == correct_explanation)
			{
			//delete word from the practiceVocabulary library
			practiceVocabulary.splice(random_number0,1); 
			practiceExplanations.splice(random_number0,1); 
			alert("Excellent!");
			correct_answer_number = correct_answer_number+1;
			}
		else{
			//add another copy of the word in the practiceVocabulary library, that makes it shows up more often
			practiceVocabulary.unshift(practice_word); 
			practiceExplanations.unshift(correct_explanation); 
			alert('Sorry, you gave a wrong answer. Correct answer is: '+correct_explanation+'<br>');	
			wrong_answer_number = wrong_answer_number +1;	
   			}
   		question_number=question_number+1;
   	});

	//When finshed all words, show alert, reset the practiceVocabulary practiceExplanations to orignal elements
	if (practiceVocabulary.length ==0){
	alert("Congraulation! You have sucessfully memorized all words in our vocabulary library.");
	practiceVocabulary = newVocabulary;
	practiceExplanations = vocabularyExplanations; 
	}

	//check result
	$('#check_result').click(function(){
	alert('You have tested '+question_number + ' words. Your made '+ correct_answer_number + ' correct answer, '+wrong_answer_number+ ' wrong answers.'); 
   	}); 
/*-------------------------------------------------------------------------
Start a new test
----------------------------------------------------------------------------*/

	//start a new word test
	$('.re_start').click(function(){
			location.reload()
	});

 });  	  


