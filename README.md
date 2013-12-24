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

===============================================================================================
Database and word library

1)users, posts as usual, no special. Please see the code on the sql folder

2)About vocabuary library:
I initially planned to use a SAT Vocabulary database as the vocabulary library. But when I tried to use the javascript generated variable as a user_id to grab the word and explanation from that database (I used ajax, JSON and sql), however, the javascript variable or array just couldn't be understood by the sql written in the php controller. 

I also want to save the array results into the database's users table, so next time when the student login again, he can retrieve the array and continue on his word practice test. But I had same trouble. The javascript just couldn't be inserted by the sql code,ajax, and json. I don't what I have done incorrect. I posted the question on the piazza forum, didn't get a useful suggestion. Eventually, I have to retreat and still use javascript as the vocabulary library as I did on the project 3. The file name is vocabularylibrary.js.
