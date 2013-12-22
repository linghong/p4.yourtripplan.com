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
			'/js/start_vocabulary_test.js'
		);	
	 	 $this->template ->client_files_body = Utils::load_client_files ($client_files_body);

	 	 #Render template
	 	 echo $this->template;
	 }

	 public function start_vocabulary_test(){

	 		$data = Array();

	 		#Findout words
	 		$q = "SELECT word 
	 		FROM yourtri1_dwa15p4.sat_vocabulary
	 		Where user_id= randomNumber[i]";
	 		$data['test_word'] = DB::instace(DB_NAME)->select_files($q);

			$q = "SELECT word_explanation 
	 		FROM sat_vocabulary
	 		Where yourtri1_dwa15p4.user_id= wordChoice[0]";
	 		$data['word_explanation1'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT word_explanation 
	 		FROM yourtri1_dwa15p4.sat_vocabulary
	 		Where user_id= wordChoice[1]";
	 		$data['word_explanation2'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT word_explanation 
	 		FROM yourtri1_dwa15p4.sat_vocabulary
	 		Where user_id= wordChoice[2]";
	 		$data['word_explanation3'] = DB::instace(DB_NAME)->select_files($q);

	 		$q = "SELECT word_explanation 
	 		FROM yourtri1_dwa15p4.sat_vocabulary
	 		Where user_id= wordChoice[3]";
	 		$data['word_explanation4'] = DB::instace(DB_NAME)->select_files($q);

	 		#Send back json results to the JS, formatted in json
	 		echo json_encode($data);
	 }


	 public function check_test_result(){
	 		$this->template->content = View::instance('v_test_result');

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