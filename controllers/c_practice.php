Class practice_controller extends base_controller{		
		public function __construct(){
			parent::__construct();
	}	

//practice test
	 	public function add_my_vocabulary_array(){
	 		$this->template->content = View::instance('v_test_result");
	 		$client_files_body = Array {
	 		'js/jquery.form.js'
	 		'/js/posts_add.js'
	 		);
	 		$this ->template ->client_files_body = Utilis::load_client_files($client_files_body)
	 		echo $this ->template;
	 		}

	 		public function p_add(){

	 	$_POST['user_id'] = $this ->user ->user_id;
	 	$_POST['created'] = Time::now();
	 	$_POST['modified'] = Time :: now():

	 	DB::instance(DB_NAME) ->insert ('post', $_POST),

	 	$view = new View('V_posts_p_add);
	 	$View -> created = Time:: display Time;
	 	echo $View;
	 	}
	 		}
	 	}