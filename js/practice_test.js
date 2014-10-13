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
  var vocabularycard="";
  var pronunciationLink = [];
  var exampleLink = [];
  var link_front ="<a href='http://media.merriam-webster.com/soundc11/"; //for word pronunciation link
  var example_front = "https://translate.google.com/#auto/en/"; //for word example link
     


  //show all the vocabulary in the clicked section on the screen
  for(i=0;i<25;i++){
          console.log(i);
    var word_number = section_number+i;

    //Get the word sentence example link from google translate
    exampleLink[word_number] =example_front.concat(newVocabulary[word_number]);
    
    //Get the word pronunciation links from merriam-webster.com   
    var word_length=newVocabulary[word_number].length;
    var first_char = newVocabulary[word_number].charAt(0).toString();

    getSurfix(newVocabulary[word_number]); //run the getsurfix function to get surfix
    console.log(surfix);

    if(surfix=="ness" ||surfix=="ly"||surfix=="-on"||newVocabulary[word_number]=="cynosure"||newVocabulary[word_number]=="habitude"){ 
        pronunciationLink[word_number]="<span class='glyphicon glyphicon-volume-off'></span>";
    }
    else {
      //word's length <=6 Get the word pronunciation link from merriam-webster.com
      if (word_length<7){
        switch(word_length){
          case 1:
           pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number]+
           "0000001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
           break;

          case 2 :
            pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number]+
            "000001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
            break;
          case 3 :
          pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number]+
           "00001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
          break;
          
          case 4 :
          pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number]+
          "0001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
          break;
          
          case 5 :
          pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number]+
           "001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
          break;
          
          case 6 :
          pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number]+
           "01.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
          break;
        }
    }

      /*  when the word's length >6, the pronunciation link is irregliar, i,e.the link tail may not be".01wav" unless only one word can be found, 
      when excluding the word has surfix or complex word, marjority of the words that are the first six letters are same can be excluded
      however, use it as cautious. On some rare chance, opposite can exist. 
      since it is the best way to precidit the link, we made the wordSurfix(also some complexword) library, use it to exclude the words, 
      so be aware its limit.
      */  
      //word_length>6 and surfix is existed, but odd situation
      else  if (newVocabulary[word_number]=="eccentric"||newVocabulary[word_number]=="extricate"||newVocabulary[word_number]=="exuberance"||newVocabulary[word_number]=="habitual"||newVocabulary[word_number]=="facsimile"||newVocabulary[word_number]=="fabulous"){
          pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number].slice(0,6)+
           "01.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>"; 
      } 
          
      //word_length>6 and surfix is existed, use glyphicon-volume-off     
      else if (word_length>6 & (specialsurfix !="#")){
       pronunciationLink[word_number]="<span class='glyphicon glyphicon-volume-off'></span>";

      //when the word's length >6 & no surfix inside the suffix library    
      }else {
         pronunciationLink[word_number]=link_front+first_char+"/"+newVocabulary[word_number].slice(0,6)+
           "01.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
      }

    }
     console.log("pronunciationLink: "+pronunciationLink[word_number]);

    //get the string of all the vocabulary need to be shown on the screen 
    vocabularycard=vocabularycard + "<div class='vocabulary_card'>"+
      "<div class='col-lg-2 col-md-3 col-sm-4 col-xs-6'><strong>"+newVocabulary[word_number]+"</strong></div>" +
      "<div class='col-lg-1 col-md-2 col-md-2 col-xs-3'>"+pronunciationLink[word_number]+" <a target='_blank' href='"+exampleLink[word_number]+"'><span class='glyphicon glyphicon-folder-open'></span></a></div>"+
      "<div class='col-lg-9 col-md-7 col-md-12 col-xs-12'>"+vocabularyExplanations[word_number]+"</div>"
      "</div>"; 
  }
  //show the string on the screen
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