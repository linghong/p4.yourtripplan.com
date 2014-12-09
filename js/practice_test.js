/*==============================================================================================================================
For Vocabulary Card Page
================================================================================================================================*/
//function to get vocabulary string   
function vocabularycard (wordlibrary,wordnumber_persection,sectionNo){
  withexplanation="";
  withoutexplanation="";
  var example_front = "https://translate.google.com/#auto/en/"; //for word example link
  var exampleLink = [];      

  //show all the vocabulary in the clicked section on the screen
  for(i=0;i<wordnumber_persection;i++){
    var word_number = (sectionNo-1)*wordnumber_persection+i;

    //word example link from google translate
    exampleLink[word_number] =example_front.concat(wordlibrary[word_number].word);
    mwlink(wordlibrary[word_number].word);

    //When explanation is shown 
    withexplanation +="<div class='each_word'>"+
        "<div class='col-lg-1 col-md-2 col-sm-2 col-xs-12'><strong>"+wordlibrary[word_number].word+"</strong></div>" +
        "<div class='col-lg-1 col-md-1 col-sm-1 col-xs-3'>"+wordlibrary[word_number].category+"</div>"+
        "<div class='col-lg-2 col-md-2 col-sm-2 col-xs-3'>"+pronunciationlink+" <a target='_blank' href='"+exampleLink[word_number]+"'> <span class='glyphicon glyphicon-folder-open'> </span></a></div>"+
        "<div class='col-lg-8 col-md-7 col-sm-12 col-xs-12'>"+wordlibrary[word_number].explanation+"</div>"+
        "</div>"; 

    //when explanation is hided
    withoutexplanation +="<div class='each_word'>"+
        "<div id='word"+word_number+"' class='section"+sectionNo+"-word col-sm-12 col-xs-12'><strong>"+wordlibrary[word_number].word+"</strong></div>" +
        "<div class='col-sm-1 col-xs-3'>"+wordlibrary[word_number].category+"</div>"+
        "<div class='col-sm-11 col-xs-9'>"+pronunciationlink+"<a target='_blank' href='"+exampleLink[word_number]+"'> <span class='glyphicon glyphicon-folder-open'> </span></a></div>"+
        "</div>"; 
  }//end for loop

      //display the string, and hide "Show Explanation" button on the screen 
      $('.vocabulary').html(
        '<div class="btn btn-royalty explanation-hide">Hide All Explanation</div>'+
        '<div class="btn btn-royalty explanation-show">Show All Explanation</div>'+
        '<div class="word-group">'+
          withexplanation+
        '</div>'  
      );
      $('.explanation-show').hide(10);

      //click hide explanation button 
      $('.explanation-hide').click(function(){ 
        $('.word-group').html(
          "<h3>Move your mouse on the word, you'll see the explanation for that word</h3>"
         + withoutexplanation);
        $('.explanation-show').show(100);      
        $('.explanation-hide').hide(100);

        //mouse hover function 
        $('.section'+sectionNo+'-word').hover(function(){
          var count =$(this).attr("id").slice(4);
          $(this).append( 
            "<span>________"+wordlibrary[count].explanation+" </span>"
          );   
          $(this).find( "span:last" ).css({   
            "color":"white"}); 
          $(this).css({
            "background-color":"#47B26B",
            "color":"white"
          });
        },function(){
          $(this).find( "span:last" ).remove();  
          $(this).css({
            "background-color":"white",
            "color":"black"
          });
        });//end hover
      });//end click explanation-hide 
  
    //click show explanation button 
    $('.explanation-show').click(function(){
        $('.word-group').html(withexplanation);
        $('.explanation-hide').show(100); 
        $('.explanation-show').hide(100); 
    });//end click explanation-show 
}

$('.vocabulary_section').click(function(){

  /*
  Determine section number
  As a demo site, it currently has only 200 SAT vocabulary. I divide them as four sections, with 50 words each section.
  assign practiceVocabulary and practiceExplanations for words related to the clicked section 
  */ 
  var section_number;
  switch($(this).text()) {
    case "Section One":
      section_number = 1;
      break; 
    case"Section Two":
      section_number = 2;
      break; 
    case "Section Three":
      section_number = 3;
      break;
    case "Section Four":
      section_number = 4;
      break;
    case "Section Five":
      section_number = 5;
      break;
    case "Section Six":
      section_number = 6;
      break;
    case "Section Seven":
      section_number = 7;
      break;
    default:    
      section_number = 8;
  }

  //print out the word modal 
  $.getJSON('/data/SATVocabulary.json', function(newVocabulary){ 
     //get the vocabulary string for SATvocabulary in a section, we use 25 words per section 
      vocabularycard(newVocabulary,25,section_number);    
  });//end getJSON
}); //end vocabulary_section


/*----------------------------------------------------------------------------------------     
For Vocabulary test Page
---------------------------------------------------------------------------------------- */
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
    $("#nextword").html('<div class="btn-group">'+
        '<button id="check_exerciseanswer" class="btn btn-success btn-md-wd">Check Answer for this Word</button>'+
        '<button id="check_result" class="btn btn-success btn-md-wd">Check My Test Score</button>'+
        '<button id="next_word" class="btn btn-success btn-md-wd">Next Word</button>'+
        '</div>');
    $("#check_exerciseanswer").hide();
     $("#check_result").hide();
    //set up original number to zero. 
    correct_answer_number=0;
    wrong_answer_number =0;
    question_number = 0;    
    var i=0;

    //For each click:
    $('#next_word').click(function(){
      $("#check_exerciseanswer").show();
     $("#check_result").show();
      //hide some text
      $("#practicetitle").hide();
      //start it again 
      $("#re_load").html('<input type ="submit"  class="btn btn-success-darken btn-wide col-md-offset-6" id="re_start" value="Start a New Test"><p>Select the correct answer choice listed below the word. To go to next question, click the "Next Word" button. Before doing so, make sure clicking "check answer for this word" to conform your answer and check whether your answer is correct.</p>');


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
      $(".practice_word").html('<div class="form-group">'+
        '<label class="control-label col-lg-12" id="question">Question'+i+'. '+ practiceVocabulary[random_number0].word+'</label>'+
         '<label for="explanation" class="radio col-xs-12"><input type="radio" name="answer" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+'</label>'+
      	 '<label for="explanation" class="radio col-xs-12"><input type="radio" name="answer" class="questions" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+'</label>'+
      	 '<label for="explanation" class="radio col-xs-12"><input type="radio" name="answer" class="questions" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+'</label>'+
      	 '<label for="explanation" class="radio col-xs-12"><input type="radio" name="answer" class="questions" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'</label>'+
         '</div>')

/*----------------------------------------------------------------------------------------     
Check if the test answer is correct
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