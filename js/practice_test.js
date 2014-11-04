/*==============================================================================================================================
For Word Practice Exercise Page
================================================================================================================================*/
/*For Vocabulary Card*/
$('.vocabulary_section').click(function(){
    var value = $(this).text();
    var section_number;

  /*
  Determine section number
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
  $.getJSON('/data/SATVocabulary.json', function(newVocabulary){ 
    var vocabularycard="";
    var exampleLink = [];
    var link_front ="<a href='http://media.merriam-webster.com/soundc11/"; //for word pronunciation link
    var example_front = "https://translate.google.com/#auto/en/"; //for word example link
       
    //show all the vocabulary in the clicked section on the screen
    for(i=0;i<25;i++){

    var word_number = section_number+i;

    //Get the word sentence example link from google translate
    exampleLink[word_number] =example_front.concat(newVocabulary[word_number].word);
      
    mwlink(newVocabulary[word_number].word); //run the getsurfix function to get surfix

    //get the string of all the vocabulary need to be shown on the screen 
    vocabularycard=vocabularycard + "<div class='vocabulary_card'>"+
      "<div class='col-lg-1 col-md-2 col-sm-2 col-xs-12'><strong>"+newVocabulary[word_number].word+"</strong></div>" +
      "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-3'>"+newVocabulary[word_number].category+"</div>" +
      "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-3'>"+pronunciationlink+" <a target='_blank' href='"+exampleLink[word_number]+"'><span class='glyphicon glyphicon-folder-open'></span></a></div>"+
      "<div class='col-lg-8 col-md-7 col-sm-12 col-xs-12'>"+newVocabulary[word_number].explanation+"</div>"+
      "</div>"; 
    }
    //show the string on the screen
    $('.vocabulary').html(vocabularycard);  
  });
});

/*For Vocabulary test*/
//Set question number as i, and start it as 0 
$('.start_practice').click(function(){

  //set up value to catch information about which section got clicked
  var value = $(this).text();
  $.getJSON('/data/SATVocabulary.json', function(newVocabulary){
    //As a demo site, it currently has only 200 SAT vocabulary. I divide them as eight sections, with 25 words each section.
    //assign practiceVocabulary for words related to the clicked section    
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
    else if(value=="Section Eight Test"){
        section_number=175;
        }
    else{
        //when the "all section" button is clicked
        section_number=newVocabulary.length;
        practiceVocabulary = newVocabulary;
        };

    //make a practice library 
    if (section_number<200){   
      practiceVocabulary = newVocabulary.slice(section_number,section_number+25);
    }

    //make a new button
    $("#practicetitle").html("<div class='preface'>Please click the 'Next' button to start the vocabulary test.</div>");
    $(".vocabulary_practice").hide();
    $("#nextword").html('<button id="next_word" class="btn btn-success-lighten btn-regular col-md-offset-7">Next</button>'); 

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
      $("#re_load").html('<input type ="submit"  class="btn btn-success-darken btn-wide col-md-offset-6" id="re_start" value="Start a New Test"><p>Pick up the correct answer choice listed below the word. Click the "Next" button to answer another question.</p> <p>Before clicking the "Next" button to go to next word question, always click "check answer for this word" to check whether your answer is correct, unless you want to skip  the  question.</p>');

      //show check answer and check score buttons
      $("#practice_submit").html('<div class="panel btn-group"><button id="check_exerciseanswer" class="btn btn-success btn-md-wd">Check Answer for this Word</button><button id="check_result"  class="btn btn-success btn-md-wd">Check My Test Score</button></div>');

      //delete any information about the result of the previous answer
      $(".result").html("");

      //Question number increase by each click
      i=i+1;

      //Generate a random number used for selecting the test word and the explanations.If it is not the "Test words for all sections", only 25 words from the vocabuary array used for practice.        
      random_number0 = Math.floor(Math.random()*practiceVocabulary.length)
      var words_count = newVocabulary.length;//used in the explanationchoicefunction for selecting the three wrong explanations 

      //Using explanationchoice function to pick up four word explanation choice from wordChoice array, 
      //Please note the four explanations are picked from original vocabulary library ( newVocabulary) not the practiceVocabulary to ensure maxium selection
      explanationchoice(random_number0,words_count, practiceVocabulary,newVocabulary);

      //Print out the test word and the four explanations
      $(".practice_word").html("<div id='question'>Question "+i+". "+ practiceVocabulary[random_number0].word+
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
     	practice_word = practiceVocabulary[random_number0].word;
      correct_explanation = practiceVocabulary[random_number0].explanation;

    	//compare the checked answer to correct answer. Tell the answer results and count the correct and wrong answer numbers
    	if (answer == correct_explanation)
    			{
    			//delete word from the practiceVocabulary library
    			practiceVocabulary.splice(random_number0,1); 

    			//tell the user test result
    			$(".result").html("Excellent Answer!");		
    			correct_answer_number = correct_answer_number+1;
    			}
    	else{
    			//add another copy of the word in the practiceVocabulary library, that makes it shows up more often
    			practiceVocabulary.unshift({"word": "practice_word","explanation":"correct_explanation", "category":practiceVocabulary[random_number0].category}); 

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
    	$('#re_start').click(function(){
      practiceVocabulary = newVocabulary;
    	location.reload();
     	});  	  
    });//#next_word
  }); //get JSON
}); //#start_practice