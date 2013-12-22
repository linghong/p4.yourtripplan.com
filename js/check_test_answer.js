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
 			
   	 	$('#result').html('You have tested 20 words. '+ correct_answer_number + 'answers are correct, '+wrong_answer_number+ 'answers are wrong.<br>');   				 			
   	});