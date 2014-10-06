/*==============================================================================================================================
For Word Practice Exercise Page
================================================================================================================================*/
/*For Vocabulary Card*/
$('.vocabulary_section').click(function(){
    var value = $(this).text();

  /*
  Determinane section number
  As a demo site, it currently has only 200 SAT vocabulary. I divide them as four sections, with 50 words each section.
  assign practiceVocabulary and practiceExplanations for words related to the clicked section 
  */  
  if(value=="Section One"){
    section_number = 0;
  }
  else if (value=="Section Two"){
    section_number = 25;
  }
  else if (value=="Section Three"){
    section_number = 50;
  }
   else if (value=="Section Four"){
    section_number =75;
  }
  else if (value=="Section Five"){
    section_number = 100;
  }
  else if (value=="Section Six"){
    section_number = 125;
  }
  else if (value=="Section Seven"){
    section_number = 150;
  }
  else{
    section_number = 175;
  }

 //print out the word in this section
  vocabularycard="";
  for(i=0;i<25;i++){
    vocabularycard=vocabularycard + "<div class='vocabulary_card'>"+
        "<div class='col-lg-3 col-md-3'><strong>"+newVocabulary[section_number+i]+"</strong></div>" +
        "<div class='col-lg-9 col-md-9'>"+vocabularyExplanations[section_number+i]+"</div></div>"; 
  }
  $('.vocabulary').html(vocabularycard);  
});


/*For Vocabulary test*/
//Set question number as i, and start it as 0 
$('.start_practice').click(function(){

    //set up value to catach the information which section got click
    var value = $(this).text();
    
    //As a demo site, it currently has only 200 SAT vocabulary. I divide them as four sections, with 50 words each section.
    //assign practiceVocabulary and practiceExplanations for words related to the clicked section    
    if(value=="Section One Test"){
        section_number =0; 
       }
    else if(value=="Section Two Test")
        {
        section_number=25;
        }
    else if(value=="Section Three Test")
        {
        section_number=50;
        }
    else if(value=="Section Four Test"){
         section_number=75;
        }
    else if(value=="Section Five Test"){
         section_number=100;
       }
    else if(value=="Section Six Test")
        {
         section_number=125;
        }
    else if(value=="Section Seven Test")
        {
         section_number=150;
        }
    else{
        section_number=175;
        }

    //make a practice library   
    practiceVocabulary = newVocabulary.slice(section_number,section_number+25);
    practiceExplanations = vocabularyExplanations.slice(section_number,section_number+25);

    //make a new button
    $(".vocabulary_practice").hide();
    $(".all_section").hide();
    $("#nextword").html('<button id="next_word" clas="button btn-default">Next</button>');


    //set up original number to zero. 
    correct_answer_number=0;
    wrong_answer_number =0;
    question_number = 0;    
    var i=0;

    //For each click:
    $('#next_word').click(function(){

      //hide some text
      $("#practicetitle").hide();

      //start it again 
      $("#re_load").html('<input type ="submit"  class="re_start" id="practice_reload" value="Start a New Test"><p>Pick up the correct answer choice listed below the word. Click the "Next" button to answer another question.</p> <p>Before clicking the "Next" button to go to next word question, always click "check answer for this word" to check whether your answer is correct, unless you want skip  the  question.</p>');

      //show check answer and check score buttons
      $("#practice_submit").html('<input type ="submit"  id="check_exerciseanswer" value="Check Answer for this Word"><br><input type ="submit"  id="check_result" value="Check My Test Score"><br><br>');

      //delete any information about the result of the previous answer
      $(".result").html("");

      //Question number increase by each click
      i=i+1;

      //Generate a random number used for selecting the test word and the explanation.(Only 25 words from the vocabuary array used for practice)        
      if(practiceVocabulary.length=25){
      		random_number0 = Math.floor(Math.random()*25)
          var words_count = 25;
      		}
      		else{
      		random_number0 = Math.floor(Math.random()*practiceVocabulary.length)
           var words_count = vocabularyExplanations.length;
      		};

      //Using explanationchoice function to pick up four word explanation choice from wordChoice array, 
      //Please note the four explanations are picked from original vocabulary library ( newVocabulary and vocabularyExplanations) not the practiceExplanations to ensure maxium selection
      explanationchoice(random_number0,words_count, practiceExplanations,vocabularyExplanations);

      //Print out the test word and the four explanations
      $(".practice_word").html("<div id='question'>Question "+i+". "+ practiceVocabulary[random_number0]+
          '</div><br><input type="radio" name="answer" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
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
    	   alert("Congraulation! You have sucessfully memorized all words in this vocabulary section.");
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
    practiceVocabulary = newVocabulary;
    practiceExplanations = vocabularyExplanations;
  	location.reload();
   	});  	  

});
  }); 