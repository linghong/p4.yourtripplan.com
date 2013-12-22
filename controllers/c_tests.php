<?php
Class tests_controller extends base_controller{		
	public function __construct(){
		parent::__construct();
	}	

	//Vocabulary test	
	 public function index(){

	 	#setup View 
	 	$this ->template ->content = View::instance ('v_tests_index');
	 	$this -> template -> title = "Test My SAT Vocabulary";

	 	#JavaScript Files
	 	 $client_files_body = Array(
	 		'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
	 		'/js/explanationchoice.js',
			'/js/start_vocabulary_test.js'
		);	
	 	 $this->template ->client_files_body = Utils::load_client_files ($client_files_body);

	 	 #Render template
	 	 echo $this->template;
	 }

	 public function start_vocabulary_test(){

	 		$data = Array();
 			//$random_Number = json_decode($randomNumber);
			//$woed_Choice = json_decode($wordChoice);

	 		#Findout words
	 		$q = "SELECT word 
	 		FROM sat_vocabulary
	 		Where user_id= randomNumber[i]";
	 		$data['test_word'] = DB::instace(DB_NAME)->select_files($q);

			$q = "SELECT explanation 
	 		FROM sat_vocabulary
	 		Where user_id= wordChoice[0]";
	 		$data['word_explanation1'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT explanation 
	 		FROM sat_vocabulary
	 		Where user_id= wordChoice[1]";
	 		$data['word_explanation2'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT explanation 
	 		FROM sat_vocabulary
	 		Where user_id= wordChoice[2]";
	 		$data['word_explanation3'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT explanation 
	 		FROM sat_vocabulary
	 		Where user_id= wordChoice[3]";
	 		$data['word_explanation4'] = DB::instace(DB_NAME)->select_files($q);

	 		#Send back json results to the JS, formatted in json
	 		echo json_encode($data);
	 }


	 //practice test
	 	public function practice(){
	 		#setup View
	 		$this->template->content = View::instance('v_tests_practice');

			#JavaScript Files
	 		$client_files_body = Array (
			'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
	 		'/js/explanationchoice.js',
	 		'js/jquery.form.js',
	 		'/js/practice_test.js'
	 		);

	 		$this ->template ->client_files_body = Utils::load_client_files($client_files_body);

	 		#Render template
	 		echo $this ->template;
	 	}

	 	public function start_practice(){
	 		$practice = Array();
 
 		//select the first 50 words from the database used for practice vocabulary library
	 		$q = "SELECT word
	 		FROM sat_vocabulary
	 		WHERE user_id < 51";
	 		$practice_vocabulary['word'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT explanation 
			FROM sat_vocabulary
	 		WHERE user_id < 51";
	 		$practice_vocabulary['explanation'] = DB::instace(DB_NAME)->select_files($q);

	 		#Send back json results to the JS, formatted in json
	 		echo json_encode($practice_vocabulary);
	 }

	 	 public function check_test_result(){
	 		$this->template->content = View::instance('v_tests_result');

	 		#JavaScript Files
	 		$client_files_body = Array(
	 		'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
	 		'/js/jquery.form.js',
	 		'/js/check_test_answer.js',
	 		);

	 		$this ->template ->client_files_body = Utilis::load_client_files($client_files_body);

	 		echo $this ->template;
	 }
}