<?php

class index_controller extends base_controller {
	
	/*-------------------------------------------------------------------------------------------------

	-------------------------------------------------------------------------------------------------*/
	public function __construct() {
		parent::__construct();
	} 
		
	/*-------------------------------------------------------------------------------------------------
	Accessed via http://localhost/index/index/
	-------------------------------------------------------------------------------------------------*/
	public function index() {

	#Redirect users not logged in to login page
        if($this->user)
          Router::redirect('/posts/index');
      
		
		# Any method that loads a view will commonly start with this
		# First, set the content of the template with a view file
			$this->template->content= View::instance('v_index_index');
			$this->template->signup= View::instance('v_users_signup');
			$this->template->login= View::instance('v_users_login');
		# Now set the <title> tag
			$this->template->title = "SAT Vocabulary helper";

			     #create an array of client files to be included in the head
	
		# CSS/JS includes
			/*
			$client_files_head = Array("");
	    	$this->template->client_files_head = Utils::load_client_files($client_files);
	    	
	    	$client_files_body = Array("");
	    	$this->template->client_files_body = Utils::load_client_files($client_files_body);   
	    	*/
	      					     		
		# Render the view
			echo $this->template;

	} # End of method
	
	
} # End of class
