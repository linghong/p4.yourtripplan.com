
/*----------------------------------------------------------------------------------------------
set up a function to generate four word explanation choices to form the wordChoice array,
	wordChoice Array: the four explanation choices
	words_count:SAT vocabulary database words total number
	testword_number: represent the user_id for the word selected from the SAT vocabulary database
	random_number1,random_number2,random_number3: 
	represent the user_id for the wrong word explanations selected from the SAT vocabulary database
------------------------------------------------------------------------------------------------*/

	//Generate three random number 
	function explanationchoice(testword_number,words_count){ 		

		//Generate three random numbers, which will be used for selecting the three wrong explanations from the SAT vocabulary database
		random_number1 = Math.floor(Math.random()*words_count)+1;
		random_number2 = Math.floor(Math.random()*words_count)+1;
		random_number3 = Math.floor(Math.random()*words_count)+1;

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
		 wordChoice = new Array(
	    	random_number1,
	    	random_number2,
	    	random_number3
		);

    	//generate a random number, use it as an order to insert the correct explanation in the word explanation choice array
		random_number = Math.floor(Math.random()*3);
    	wordChoice.splice(random_number,0,testword_number);
	}

/*--------------------------------------------------------------------------------
Start a new test
-----------------------------------------------------------------------------*/

	//start a new word test
	$('.re_start').click(function(){
			location.reload();
	});
