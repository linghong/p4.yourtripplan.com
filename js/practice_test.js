
/*==============================================================================================================================
For Word Practice Exercise Page
================================================================================================================================*/

/*---------------------------------------------------------------------------------------                
	Set up word practice array library
---------------------------------------------------------------------------------------*/
	//Set question number as i, and start it as 0 
	var i=0;

	//set up original number to zero. 
 	correct_answer_number=0;
   	wrong_answer_number =0;
	question_number = 0;

	//Generate two arrays for word practice library.
	practiceVocabulary = newVocabulary;
	practiceExplanations = vocabularyExplanations;

	//For each click:
	$('#start_practice').click(function(){


	//Question number increase by each click
	i=i+1;

	//New  buttons
	$("#practicetitle").hide();

	//start it again 
	$("#re_load").html('<input type ="submit"  class="re_start" id="practice_reload" value="Reload to Start a New Test"><p>Pick up the correct answer choice listed below the word. Click the "start" button to answer another question. Before clicking the start button to go to a new question, always click "check answer for this word" button to check whether your answer is correct, unless you want skip  the  question.</p>');

	//show check answer and check score buttons
	$("#practice_submit").html('<input type ="submit"  id="check_exerciseanswer" value="Check Answer for this Word"><br><input type ="submit"  id="check_result" value="Check My Test Score"><br><br>');

	//delete any information about the result of the previous answer
	$(".result").html("");
	
/*----------------------------------------------------------------------------------------
Produce a word for testing and the four explanation choices
----------------------------------------------------------------------------------------*/
	//Generate a random number used for selecting test word and the explanation.(Only 50 words from the library for practice)
	words_count=50;
	if(practiceVocabulary.length>=50){
		random_number0 = Math.floor(Math.random()*words_count)
		}
		else{
		random_number0 = Math.floor(Math.random()*practiceVocabulary.length)
		};

	//Using explanationchoice function to pick up four word explanation choice from wordChoice array, 
	//Please note the four explanations are picked from original vocabulary library vocabularyExplanations not the practiceExplanations
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

		//compare the checked answer to correct answer. Tell the answer results and count the correct and wrong answer numbers
		if (answer == correct_explanation)
			{
			//delete word from the practiceVocabulary library
			practiceVocabulary.splice(random_number0,1); 
			practiceExplanations.splice(random_number0,1); 

			//tell the user test result
			$(".result").html("Excellent Answer!");		
			correct_answer_number = correct_answer_number+1;
			}
		else{
			//add another copy of the word in the practiceVocabulary library, that makes it shows up more often
			practiceVocabulary.unshift(practice_word); 
			practiceExplanations.unshift(correct_explanation); 

			//tell the user test result
			$(".result").html('Sorry, you gave a wrong answer. Correct answer is: '+correct_explanation+'<br>');	
			wrong_answer_number = wrong_answer_number +1;	
   			}
   		question_number=question_number+1;
   	});

	//When finshed all words, show alert, reset the practiceVocabulary and practiceExplanations to orignal elements
	if (practiceVocabulary.length ==0){
	alert("Congraulation! You have sucessfully memorized all words in our vocabulary library.");
	practiceVocabulary = newVocabulary;
	practiceExplanations = vocabularyExplanations; 
	}

	//set up an original score variable equal to
	var score = 0

	//check result
	$('#check_result').click(function(){
	score = correct_answer_number/question_number*100	
	$(".result").html('Your test score is ' + score + '. <br>You have tested '+question_number + ' words. Your made '+ correct_answer_number + ' correct answer, '+wrong_answer_number+ ' wrong answers.'); 
   	}); 

/*-------------------------------------------------------------------------
Start a new test
----------------------------------------------------------------------------*/

	//start a new word test
	$('.re_start').click(function(){
	/*
	var vocabulary_string = practiceVocabulary.join();
	   	$.ajax({
	   	type:'POST',
	   	url:'/tests/save_data',
	   	beforeSend:function(){
	   	//Display a loading message while waiting for the ajax call to complete
	   	$('#save').html("loading......");
	   	},
	   	success: function(response){
	   	$('#save').html("you data has been saved.");
	   	},
	   	data:{
	  		vocabulary_string: practiceVocabulary.join(),
	  	},

	   	});
	*/
		location.reload();
 	});  	  

});
