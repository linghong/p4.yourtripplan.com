<?php
Class tests_controller extends base_controller{		

	public function __construct(){
		parent::__construct();
	}	

	//Vocabulary test	
	public function index(){
	 	if(!$this->user){
	        Router::redirect('/');
	    }
		 	
		#setup View 
		$this ->template ->content = View::instance ('v_tests_index');
		$this -> template -> title = "Test My SAT Vocabulary";

		#JavaScript Files
		$client_files_body = Array(
		 //	'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
		 	'/js/vocabularylibrary.js',
		 	'/js/explanationchoice.js',
			'/js/start_vocabulary_test.js',
		);	

		$this->template ->client_files_body = Utils::load_client_files ($client_files_body);

		#Render template
		echo $this->template;
	}

	//Practice test
	public function practice(){
	 	if(!$this->user){
          	Router::redirect('/');
        }
        	
	 	#setup View
	 	$this->template->content = View::instance('v_tests_practice');

		#JavaScript Files
	 	$client_files_body = Array (
			//'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
	 		'/js/vocabularylibrary.js',
	 		'/js/explanationchoice.js',
	 		'/js/practice_test.js'
	 	);

	 	$this ->template ->client_files_body = Utils::load_client_files($client_files_body);

	 	#Render template
	 	echo $this ->template;
	 }

	 	 //save practice vocabulary array to database
	 	//public function save_data(){
	 	//echo vocabulary_string;
		//$_POST['user_id'] = $this->user ->user_id;
		//$_POST['array'] = vocabulary_string;
		
       // DB::instance(DB_NAME)->insert_row('users', $_POST);
	 //}

}