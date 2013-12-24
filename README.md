p4.yourtripplan.com
===================
The site's purpose is to help high school students increase their SAT vocabulary. Its idea came from project 3, but unlike project 3, now only log-in users can use the function, also whatever files I took from project 2 and 3 and developed further, all the issues ever mentioned by the teacher assistant on the project 2 and 3 have been fixed.

Features include:
1)Baisc fetures: sign up, login, logout, portfolio, avatar

2)A message board: students or the administrator can post information related to SAT test on the message board.

3) A vocabulary test section:
for each test, 20 words are  randomly selected from the vocabulary library (currently only a demo, only a few hundred of SAT vocabulary are included); four word explanation choices,including the correct answer, are also selected. The javascript will judge if the student's answer is correct.

4) Word practice exercise:
Same as above, but each time it only generates one word. The JavaScript code also drops out any words the students did correct answers, but let students practice more for the words they haven't grasped. 

Javascript used:
1)generate random numbers, and use these numbers to pick up words and four word explanations from the vocabulary libraries.
2)Compare a student's answer to the correct answer, and give a response whether it is correct.

Database and word library
Users, posts as usual, no special.

About vocabuary library:
I planned to use database as SAT vocabulary library, but I have trouble to use the javascript generated variable ot array to grab the word and explanation from the SAT 
