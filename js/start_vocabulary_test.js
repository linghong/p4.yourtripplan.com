/*===============================================================================================================================
Functions
===============================================================================================================================*/

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

/*===============================================================================================================================
For Word Test Page
===============================================================================================================================*/

$('.start_test').one("click", function(){

	//Inject the data into the Page
	//New subtitle and new button:
		$("#subtitle").html('Please pick up the correct explanation from the four explanations listed below:<br><input type ="submit"  class="re_start" id="test_reload" value="Back to Home Page">');
		$("#submit").html('<input type ="submit"  id="check_testanswer" value="Check Answer"><br>');
		$(".start_test").hide();
	
	/*------------------------------------------------------------------------------------------
	Produce words for testing and their four explanation choices
	--------------------------------------------------------------------------------------------*/

	//Set up the word library as 500 words. 
	words_count=500;

	//Generate a number array used for selceting test words and their correct explanations.
	randomNumber= new Array();
	
	//Generate 20 numbers to be used to pick up the test words from SAT vocabulary database
	for (i=0;i<20; i++){

		//Generate 20 random number, which will be used in selecting the test words and their correct explanations.
		randomNumber[i] = Math.floor(Math.random()*words_count)+1;
			if(i>0){
	 			for (j=i-1;j>-1; j--){
	 				if(randomNumber[i] == randomNumber[j]){
	 					randomNumber[i] = Math.floor(Math.random()*words_count);
	 					j=i-1;
	 				};
	 			}
	 		}
		//Use the explanationchoice function to produce four explanation choices for each test word
		explanationchoice(randomNumber[i],words_count);

		$wordChoice = JSON.stringfy(wordChoice);
		$randNumber = JSON.stringfy(randomNumber);

		//Using ajax to get the data from database and print it out
		$.ajax({
			type:'POST',
			url:'/tests/start_vocabulary_test/',
			beforeSend: function() {
	            // Display a loading message while waiting for the ajax call to complete
	            $('#results').html("Loading...");
	        },
			sucess: function (response){

				//Parse the JSON results into an array
				var data = $.parseJSON (response);

				//Generate an array to store word question number
				wordQuestion = new Array
					(
					"Question1","Question2","Question3","Question4","Question5","Question6","Question7","Question8","Question9","Question10","Question11","Question12","Question13","Question14","Question15","Question16","Question17","Question18","Question19","Question20"
					);

				q=20-i;
		
				//List the test word and the four explanations on the screen
				$(".word").after
					(
					'<div id="question">Question '+q+'. '+ test_word+
					'</div><br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer0" value="'+word_explanation1+'">'+word_explanation1+
					'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer1" value="'+word_explanation2+'">'+word_explanation2+
					'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer2" value="'+word_explanation3+'">'+word_explanation3+
					'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer3" value="'+word_explanation4+'">'+word_explanation4+'<br><br>'
					);
			},
		});
	}
});