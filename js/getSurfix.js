/*
The purpose is to find a word's prounciation link from merrian-webster dictionary
which, in general, uses a word's first six letters and the number "1" to represent a word . 
If more than one word has the same first six letters, the words will be labeled as number "1", "2"......
Thus, there is a good possibility to predict the prounciation link for those words. 
The method used below is for this purpose, currently the rate of correctly predicting the link is between 90% -95%
To judge whether a word's pronunciation link is labeled as number "1", use this method to check 
whether the word has a surfix that could produce mutiple form words.
*/
function getSurfix(word){
  surfix =""; //word surfix
  specialsurfix =""; //word surfix only for those wordswith seven-nine letters that won't be labeled with number "1"
  var word_length=word.length;
  console.log("word length: " +word_length);

  //a word's surfix can have different word length 
  var one_letter= word.slice(word_length-1, word_length);
  var two_letters= word.slice(word_length-2, word_length);
  var three_letters = word.slice(word_length-3, word_length);
  var four_letters= word.slice(word_length-4, word_length);
  var five_letters = word.slice(word_length-5, word_length);

  if (one_letter=="y"){
      surfix = "y";
  }
  else{
    /*even when word_length is among 1-6, 
    word with surfix "ness" and "ly" not obey the first six letter rule
    */ 
    for (j=0;j<wordSurfix.length;j++){
      if(wordSurfix[j]== two_letters){
        surfix= two_letters;
    }
    else if(wordSurfix[j]== three_letters){
      surfix = three_letters;
    }
    else if(wordSurfix[j]== four_letters){
      surfix = four_letters;
    } else if(wordSurfix[j]== five_letters){
      surfix = five_letters;
    }else{
      surfix = "#";
    }
      if(surfix != "#")break;
    }
      console.log(surfix);

    if (word_length ==7){
      for (k=0;k<sevenSurfix.length;k++){
        if(sevenSurfix[k]== two_letters){
          specialsurfix= two_letters;
        }
        else if(sevenSurfix[k]== three_letters){
          specialsurfix = three_letters;
        }
        else if(sevenSurfix[k]== four_letters){
          specialsurfix = four_letters;
        } else if(sevenSurfix[k]== five_letters){
          specialsurfix = five_letters;
        }else{
          specialsurfix = "#";
        }
          if(specialsurfix != "#")break;
        }
          console.log(specialsurfix);
      }
      else if (word_length ==8){
        for (l=0;l<eightSurfix.length;l++){
          if(eightSurfix[l]== two_letters){
            specialsurfix= two_letters;
          }
          else if(eightSurfix[l]== three_letters){
            specialsurfix = three_letters;
          }
          else if(eightSurfix[l]== four_letters){
            specialsurfix = four_letters;
          } else if(eightSurfix[l]== five_letters){
            specialsurfix = five_letters;
          }else{
            specialsurfix = "#";
          }
            if(specialsurfix != "#")break;
        }
        console.log(specialsurfix);
      }
      else{
        for (m=0;m<nineSurfix.length;m++){
          if(nineSurfix[m]== two_letters){
            specialsurfix= two_letters;
          }else if(nineSurfix[m]== three_letters){
            specialsurfix = three_letters;
          }else if(nineSurfix[m]== four_letters){
            specialsurfix = four_letters;
          }else if(nineSurfix[m]== five_letters){
            specialsurfix = five_letters;
          }else{
            specialsurfix = "#";
          }
          if(specialsurfix != "#")break;
        }
      }
    }  
    console.log(specialsurfix);
}
