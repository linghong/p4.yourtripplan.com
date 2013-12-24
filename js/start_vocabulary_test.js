
/*===============================================================================================================================
For Word Test Page
===============================================================================================================================*/

$('.start_test').one("click", function(){

	//New subtitle and new button:
	$("#subtitle").html('Please pick up the correct explanation from the four explanations listed below:<br><input type ="submit"  class="re_start" id="test_reload" value="Back to Home Page">');
	$("#submit").html('<input type ="submit"  id="check_testanswer" value="Check Answer"><br>');
	$(".start_test").hide();
/*------------------------------------------------------------------------------------------
Produce words for testing and their four explanation choices
--------------------------------------------------------------------------------------------*/
	//Calculate newVocabulary array's total word number
	words_count = newVocabulary.length

	//Generate a number array used for selceting test words and their correct explanations.
	randomNumber= new Array();
	
	//Generate 20 test words
	for (i=0;i<20; i++){

		//Generate 20 random number, which will be used in the array for selecting the test words and their correct explanations.
		randomNumber[i] = Math.floor(Math.random()*words_count);
			if(i>0){
	 		for (j=i-1;j>-1; j--){
	 		if(randomNumber[i] == randomNumber[j]){
	 		randomNumber[i] = Math.floor(Math.random()*words_count);
	 			j=i-1;
	 			};
	 		}
		}
	//Use the explanationchoice function to produce four explanation choices for each test word
	explanationchoice(randomNumber[i],newVocabulary.length, vocabularyExplanations);
	
	//List the test word and the four explanations on the screen
	wordQuestion = new Array
		(
		"Question1","Question2","Question3","Question4","Question5","Question6","Question7","Question8","Question9","Question10","Question11","Question12","Question13","Question14","Question15","Question16","Question17","Question18","Question19","Question20"
		);
	q=20-i;
		
	$(".word").after
		(
		'<div id="question">Question '+q+'. '+ newVocabulary[randomNumber[i]]+
		'</div><br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'<br><br>'
		);

	//clear the test results on the screen
	$('.result').html('');
}

/*----------------------------------------------------------------------------------------
Check if the answer is correct
----------------------------------------------------------------------------------------*/
  	//compare to find whether the answer is correct. Give the performance information.
 	$('#check_testanswer').one("click", function(){
	
		//variable to store correct and wrong answer numbers 
   		correct_answer_number=0;
   		wrong_answer_number =0;
		
		//array to store performance
		//wordPerformance = new Array();

   		//Record word that made wrong and correct answer
		for (i=0;i<20; i++){

 			//find which radio button is checked
			var answer =$('input:radio[name="'+wordQuestion[i]+'"]:checked').val();

			//correct explanation
    		correct_explanation = vocabularyExplanations[randomNumber[i]];

			//compare the checked answer to correct answer. tell the answer results and count the correct and wrong answer numbers
			if (answer == correct_explanation)
				{	
				correct_answer_number = correct_answer_number+1;
			//	wordPerformance[i]=1;
				}
			else{
				wrong_answer_number = wrong_answer_number +1;
			//	wordPerformance[i]=0;
   				}
 		}
 		var score = correct_answer_number*5	
   	 	$('.result').html('Your test score is ' + score + '. <br> You have tested 20 words. '+ correct_answer_number + ' answers are correct, '+wrong_answer_number+ ' answers are wrong.<br>');   				 			
   	});
/*--------------------------------------------------------------------------------
Start a new test
-----------------------------------------------------------------------------*/

	//start a new word test
	$('.re_start').click(function(){
			location.reload()
	});


});
