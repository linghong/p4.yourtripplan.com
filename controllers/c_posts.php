<?php
Class posts_controller extends base_controller{		
		public function __construct(){
			parent::__construct();
	}		
		
		public function add() {

			#Make sure user is logged in
				if(!$this->user){
					Router::redirect('/');
			}

			# Setup view
			$this->template->content = View::instance('v_posts_add');

			 $this->template->title = "Add Posts";
			//$this->template->title = "New Post";

			# Render template
			echo $this->template;
		}

		public function p_add(){

			#Associate this post with this user
			$_POST['user_id'] = $this->user->user_id;

			#Add Unix time stamp for the post
			$_POST['created'] = Time::now();
			$_POST['modified'] = Time::now();

			#Insert
			DB::instance(DB_NAME)->insert('posts', $_POST);
			Router::redirect("/posts");
		}

	public function index() {

			#Redirect users not logged in to login page
        	if(!$this->user){
          			Router::redirect('/');
        		}

			#Set up the view
			$this->template->content = View::instance('v_posts_index');
 
 			$this->template->title = "Posts";

			#Query
			$q = 'SELECT
				posts.content,
				posts.created,
				posts.user_id AS post_user_id,
				users.first_name,
				users.last_name
			FROM posts
			INNER JOIN users
				ON posts.user_id = users.user_id
			WHERE users.user_id ='.$this->user->user_id.'
			ORDER BY posts.created DESC';

			#Run the query, store the results in the variable $posts
			$posts = DB::instance(DB_NAME)->select_rows($q);

			# Pass data to the View
			$this->template->content->posts = $posts;

			#Render the View
			echo $this->template;
		}

		public function myposts() {

			#Redirect users not logged in to login page
        	if(!$this->user){
          		Router::redirect('/');
        	}

			#Set up the view
			$this->template->content = View::instance('v_posts_myposts');

			 $this->template->title = "My Posts";

			#Query
			$q = 'SELECT
				posts.content,
				posts.created,
				posts.user_id AS post_user_id,
				users.first_name,
				users.last_name
			FROM posts
			INNER JOIN users
			ON posts.user_id = users.user_id
			WHERE users.user_id ='.$this->user->user_id.'
			ORDER BY posts.created DESC';

			#Run the query, store the results in the variable $posts
			$posts = DB::instance(DB_NAME)->select_rows($q);

			# Pass data to the View
			$this->template->content->posts = $posts;

			#Render the View
			echo $this->template;
		}

}