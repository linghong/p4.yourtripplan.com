/*
The purpose is to find a word's prounciation link from merrian-webster dictionary
which, in general, uses a word's first six letters and the number "1" to represent a word . 
If more than one word has the same first six letters, the words will be labeled as number "1", "2"......
Thus, there is a good possibility to predict the prounciation link for those words. 
The method used below is for this purpose, currently the rate of correctly predicting the link is close to 90%,
The odd words that does not obey the rule used in the predicting method are listed in the two odd libraries(oddInclude and oddExclude). 
To judge whether a word's pronunciation link is labeled as number "1", use this method to check 
whether the word has a surfix that could produce mutiple form words.
*/
function getSuffix(word){
  suffix =""; //word surfix
  specialsuffix =""; //word surfix only for those wordswith seven-nine letters that won't be labeled with number "1"
  var word_length=word.length;
  //a word's surfix can have different word length 
  var two_letters= word.slice(word_length-2, word_length);
  var three_letters = word.slice(word_length-3, word_length);
  var four_letters= word.slice(word_length-4, word_length);
  var five_letters = word.slice(word_length-5, word_length);

    /*even when word_length is among 1-6, 
    word with surfix "ness" and "ly" not obey the first six letter rule
    */ 
    for (j=0;j<wordSuffix.length;j++){
      if(wordSuffix[j]== two_letters){
        suffix= two_letters;
      } else if(wordSuffix[j]== three_letters){
        suffix = three_letters;
      } else if(wordSuffix[j]== four_letters){
        suffix = four_letters;
      } else if(wordSuffix[j]== five_letters){
        suffix = five_letters;
      } else {
        suffix = "#";
      }
      if(suffix != "#")break;
    }

    //special suffix
    if (word_length <7){
     var wSuffix=wordSuffix;
    }
    else if (word_length ==7){
     var wSuffix=sevenSuffix;
    }
    else if (word_length ==8){
     var wSuffix=eightSuffix;
    }
    else if (word_length ==9){
     var wSuffix=nineSuffix;
    }
    else{
     var wSuffix=tenSuffix;
    }

    for (j=0;j<wSuffix.length;j++){
      if(wSuffix[j]== two_letters){
        specialsuffix= two_letters;
      }
      else if(wSuffix[j]== three_letters){
        specialsuffix = three_letters;
      }
      else if(wSuffix[j]== four_letters){
        specialsuffix = four_letters;
      } else if(wSuffix[j]== five_letters){
        specialsuffix = five_letters;
      }else{
        specialsuffix = "#";
      }
        if(specialsuffix != "#")
        { console.log(specialsuffix); 
          break;}
    }  
}

function getOdd(word){
  oddexclude="null";
  oddinclude="null";
  for(count=0;count<wordExclude.length; count++){
    if(wordExclude[count]==word){
      oddexclude=word; 
      break;
    }
  }

   for(count=0;count<wordInclude.length; count++){
    if(wordInclude[count]==word){
      oddinclude="true"; 
      break;
    }
  }
}

function mwlink(word){
  //A few of variables and arrays 
    var link_front ="<a href='http://media.merriam-webster.com/soundc11/"; //for word pronunciation link
   
      //Get the word pronunciation links from merriam-webster.com   
      var word_length=word.length;
      var first_char = word.charAt(0).toString();

      getSuffix(word); //run the getsuffix function to get surfix
      getOdd(word); //run the oddWord funtion to check whether the word is not obey to the regular link rule

      if(suffix=="ness" ||suffix=="ly"||suffix=="-on"||oddinclude=="true"){ 
          pronunciationlink="<span class='glyphicon glyphicon-volume-off'></span>";
     
      }
      else {
        //word's length <=6 Get the word pronunciation link from merriam-webster.com
        if (word_length<7){
          switch(word_length){
            case 1:
            pronunciationlink=link_front+first_char+"/"+word+
             "0000001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
             break;

            case 2 :
            pronunciationlink=link_front+first_char+"/"+word+
              "000001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
              break;

            case 3 :
            pronunciationlink=link_front+first_char+"/"+word+
             "00001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
            break;
            
            case 4 :
            pronunciationlink=link_front+first_char+"/"+word+
            "0001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
            break;
            
            case 5 :
           pronunciationlink=link_front+first_char+"/"+word+
             "001.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
            break;
            
            case 6 :
            pronunciationlink=link_front+first_char+"/"+word+
             "01.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
            break;
          }//end switch
        }//end if word_length<7

        /*  when the word's length >6, the pronunciation link is irregliar, i,e.the link tail may not be".01wav" unless only one word can be found, 
        when excluding the word has surfix or complex word, marjority of the words that are the first six letters are same can be excluded
        however, use it as cautious. On some rare chance, opposite can exist. 
        since it is the best way to precidit the link, we made the wordSurfix(also some complexword) library, use it to exclude the words, 
        so be aware its limit.
        */  
        //word_length>6 and surfix is existed, but odd situation
        else  if (oddexclude!="null"){
            pronunciationlink=link_front+first_char+"/"+word.slice(0,6)+
             "01.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>"; 
        } 
            
        //word_length>6 and surfix is existed, use glyphicon-volume-off     
        else if (word_length>6 & (specialsuffix !="#")){
         pronunciationlink="<span class='glyphicon glyphicon-volume-off'></span>";

        //when the word's length >6 & no surfix inside the suffix library    
        }else {
           pronunciationlink=link_front+first_char+"/"+word.slice(0,6)+
             "01.wav' target='_blank'><span class='glyphicon glyphicon-volume-up'></span></a>";
        }
      }//end else
      return pronunciationlink;
    }