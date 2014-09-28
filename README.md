p4.yourtripplan.com
===================
The site's purpose is to help high school students increase their SAT vocabulary. Its original formate is from my course project, but I develop it further to better suit its purpose. 

Features include:
1)Baisc fetures: sign up, login, logout, portfolio, avatar,  etc.

2)A message board: students or the administrator can post information related to SAT test on the message board.

3) A vocabulary test section:
For each test, 20 words are  randomly selected from the vocabulary library (currently only a demo, only a few hundred of SAT vocabulary are included); four word explanation choices, including the correct answer, are also selected. The javascript will judge if the student's answer is correct or not.

4) Word practice exercise:
Same as above, but each time it only generates one word. The JavaScript code also drops out any words the students did correct answers, but let students practice more for the words they haven't grasped. 

Javascript used:
1)Generate random numbers, and use these numbers to pick up words and four word explanations from the vocabulary libraries.
2)Compare a student's answer to the correct answer, and give a response whether it is correct.

===============================================================================================
Database and word library

1)users, posts as usual, no special. Please see the code on the sql folder

2)About vocabuary library:
Currently the sample vocabulary library is vocabularylibrary.js, but I plan to use a vocabulary database as the vocabulary library. Thus, students can save the array results into the database's users table, so next time when the student login again, he can retrieve the array and continue on his word practice test. 