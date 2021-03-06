/*===============================================================================================================================
Functions
===============================================================================================================================*/

/*----------------------------------------------------------------------------------------------
set up a function to generate four word explanation choices to form the wordChoice array, 
	wordExplanations:array for the word explanations, which covers all vocabulary
	practiceExplanations: vocabulary array used for the test, which are same as wordExplanations in test page, but different in practice test page.
	words_count:array length
	testword_number: representation the posotion for the word selected in the array
	random_number1,random_number2,random_number3: 
	representation the posotion for three wrong explanation choice in the array
------------------------------------------------------------------------------------------------*/
	//Generate a function for the four word explanation choices 
	function explanationchoice(testword_number,words_count, practiceLibrary, wordLibrary){ 		

		//Generate three random numbers, which will be used for selecting the three wrong explanations from the vocabulary array library 
		random_number1 = Math.floor(Math.random()*words_count);
		random_number2 = Math.floor(Math.random()*words_count);
		random_number3 = Math.floor(Math.random()*words_count);

    	//Check if the random number is same with each other. If so, regenerate a new one.
    	while (random_number1 == testword_number) 
    	 	{
    	 	random_number1 = Math.floor(Math.random()*words_count);
    	 	}
	    while (random_number2 == testword_number ||random_number2 == random_number1) 
	    	{
	    	random_number2 = Math.floor(Math.random()*words_count);
	    	}
		while(random_number3 == testword_number || random_number3 == random_number1 || random_number3 == random_number2) 
			{
			random_number3 = Math.floor(Math.random()*words_count);
			}
		
    	//pick up the three wrong explanations and make an array for word explanation choices	
    	var wrong_explanation1 = wordLibrary[random_number1].word;
	    var wrong_explanation2 = wordLibrary[random_number2].word;
	    var wrong_explanation3 = wordLibrary[random_number3].word;
    	wordChoice = new Array(
	    	wrong_explanation1,
	    	wrong_explanation2,
	    	wrong_explanation3
		);

    	//generate a random number, use it as an order to insert the correct explanation in the word explanation choice array
		random_number = Math.floor(Math.random()*3);
    	wordChoice.splice(random_number,0,practiceLibrary[testword_number].explanation);
	}


