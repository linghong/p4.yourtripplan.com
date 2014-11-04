<?php
  class users_controller extends base_controller {

    public function __construct() {
        parent::__construct();
    }


    public function signup($error = NULL) {

        #Set up the view and title
          $this->rightsidebartemplate->content= View::instance('v_index_index');
          $this->rightsidebartemplate->signup = View::instance('v_users_signup');
          $this->rightsidebartemplate->title   = "Sign Up";

        # Pass errors
          $this->rightsidebartemplate->signup->error = $error;
 
        # Render the view
          echo $this->rightsidebartemplate;

    }

    #see what the form submitted
    public function p_signup() {

       #select email
        $email = DB::instance(DB_NAME)->select_field('SELECT email FROM users WHERE email = "'.$_POST['email'].'"');
       
       #Check if email already exists.If so, display error message
        if($email)
        {
          die("Email already exists! Please sign up again. <a href='/users/signup/'>Back to the sign up page</a>");
        }

        # Prevent from leaving blank fields                
        elseif (empty($_POST['last_name']) || empty($_POST['first_name']) || empty($_POST['password']) || empty($_POST['email'])) 
        {
        # Display error message
        Router::redirect("/users/signup/error");
        }
        
        else{
        #Sanitize the user entered data
          $_POST = DB::instance(DB_NAME)->sanitize($_POST);  

        #Store data
          $_POST['created'] = Time::now();
          $_POST['modified'] = Time::now();
          $_POST['avatar']='example.gif';
        #Encrypt the password
          $_POST['password'] =sha1(PASSWORD_SALT.$_POST['password']);
          $_POST['token']  = sha1(TOKEN_SALT.$_POST['email'].Utils::generate_random_string());

        DB::instance(DB_NAME)->insert_row('users', $_POST);
        }
        Router::redirect("/users/login");
    }

    public function login($error = NULL){
        #set up view
        $this->rightsidebartemplate->content = View::instance ('v_index_index');
        $this->rightsidebartemplate->login = View::instance('v_users_login');
        $this->rightsidebartemplate->title   = "Login";

        # Pass data to the view
        $this->rightsidebartemplate ->login ->error = $error;

        #render template
        echo $this->rightsidebartemplate;
    }

    public function p_login(){

        #Sanitize the user entered data
          $_POST = DB::instance(DB_NAME)->sanitize($_POST);

        #compare password against one in the db
          $_POST['password'] = sha1(PASSWORD_SALT.$_POST['password']);
       
        #retrive the token
          $q = 'SELECT token
                FROM users
                WHERE email= "'.$_POST['email'].'"
                AND password ="'.$_POST['password'].'"';
      
        $token = DB::instance(DB_NAME)->select_field($q);

        #login or not login
        if($token)
        {
          setcookie('token', $token, strtotime('+1year'),'/');
            
          #Send them to the main index.
          Router::redirect("/tests/index");
        }
        else 
        {
          #Send them back to the login page.
          Router::redirect("/users/login/error");
        }
    }
    
    public function logout(){
  
      #Generate and save a new token for next login
        $new_token = sha1(TOKEN_SALT.$this->user->email.Utils::generate_random_string());

      #Create the data array
        $data = Array("token" => $new_token);

      #Do the update
        DB::instance(DB_NAME)->update('users', $data, 'WHERE user_id ='.$this->user->user_id);

      #Delete their token cookie
        setcookie('token', '', strtotime('-1 year'), '/');

      #Send them back to the main index.
        Router::redirect("/");
    }

     public function lessons() {
        if($this->user){
            Router::redirect('/tests/practice');
        }
        #Set up the view and title
          $this->template->content = View::instance('v_users_lessons');
          $this->template->title   = "Practice Lessons";

       #JavaScript Files
        $client_files_body = Array (
          //'//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
          '/js/vocabularylibrary.js',
          '/js/explanationchoice.js',
          '/js/getSuffix.js',
          '/js/practice_test.js'
        );

        $this ->template ->client_files_body = Utils::load_client_files($client_files_body);

        # Render the view
          echo $this->template;
    }

    public function profile($user_name = NULL){

      #Redirect users not logged in to login page
        if(!$this->user){
          Router::redirect('/');
        }

      #Logged in users:
        #Create a new View instance     
          $this->template->content = View::instance('v_users_profile');
          $this->template->title = "My profile";

      #Query
        $q = 'SELECT
          first_name,
          last_name,
          created,
          email,
          avatar
        FROM users
        WHERE user_id = '.$this->user->user_id;

      #Run the query, store the results in the variable $posts
        $users = DB::instance(DB_NAME)->select_rows($q);

      # Pass data to the View
        $this->template->content->users = $users;

      /*
      #create an array of client files to be included in the head
        $client_files_head = Array(
             '/css/widgets.css',
             '/css/profile.css'
             );
        $this->template->client_files_head = Utils::load_client_files($client_files_head);
 
      #create an array of client files to be included in the head
        $client_files_body = Array(
            '/js/widgets.min.js',
            'js/profile.min.js'
            );
          $this->template->client_files_body = Utils::load_client_files($client_files_body);
      */

        echo $this->template;

        }

    public function avatar() {
      #Make sure user is logged in
        if(!$this->user){
          Router::redirect('/users/login');
        }

      # Setup view
        $this->template->content = View::instance('v_users_avatar');
        $this->template->title = "New Avata";

      # Render template
        echo $this->template;
      }

    public function p_avatar(){ 
   
      #UPLOAD IMAGE 
        $avatar=Upload::upload($_FILES, "/uploads/avatars/", array("JPG", "JPEG", "jpg", "jpeg", "gif", "GIF", "png", "PNG"), $new_file_name = NULL);
 
        /*
         $path = "/uploads/avatars/";
         $filename = $_FILES['avata']['name'];  
        $extension = substr($filename, strrpos($filename, '.')); 
        $avatar = $path.$user_id.$extension; 
        */

      #Update avatar in the users table, it was set as empty when users signed up
        $data = Array(
          "avatar" => $avatar
        );

        DB::instance(DB_NAME)->update("users", $data,"WHERE user_id =".$this->user->user_id);

      #Redirect
        Router::redirect('/users/profile');

    } 

        public function about() {

        #Set up the view and title
          $this->template->content = View::instance('v_users_about');
          $this->template->title   = "How Does It Work";

        # Render the view
          echo $this->template;
    }
/*
      public function contact($error = NULL) {

        #Set up the view and title
          $this->template->content = View::instance('v_users_contact');
          $this->template->title   = "Contact US";

        # Pass data to the view
        $this->template ->login ->error = $error;

        # Render the view
          echo $this->template;
    }

 public function p_contact(isset($_POST['submit'])){

      # Prevent from leaving blank fields                
      if (empty($_POST['name']) 
        {
        # Display error message
        Router::redirect("/users/contact/error");
        }
        
        else{
        #Sanitize the user entered data
          $_POST = DB::instance(DB_NAME)->sanitize($_POST);  

        #Store data
         
        $name = $_POST['name'];
        $tool = $_POST['tool'];
        $continent = $_POST['continent'];
        $competition = $_POST['competition'];
        $message = $_POST['message'];
        $email = $_POST['email'];

        DB::instance(DB_NAME)->insert_row('users', $_POST);
        }

       $headers = "From: $name <$email>\n";
       $subject = "Message from contact form";
       $to_email = admin@edugym.com
       mail($to_email, $subject, $message, $headers);

        Router::redirect("/users/contact");
    }
*/


    


}
 #end of User_controller class

