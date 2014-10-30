<div class="bx-outside"> 
  <h2>Log in</h2>
  <form class='bx-inner' role='form' method='POST' action='/users/p_login'>
  	<div class="form-group">
      <label for='loginemail'>Email</label>
      <input type='email' name='email' id='loginemail' class='form-control' placeholder='Your email'>
    </div>
  	<div class="form-group">
  		<label for="loginpassword">Password</label>
     		<input type='password' name='password' id='loginpassword' class='form-control' placeholder='Enter password'>
     	</div>

      <!--If errors - display message-->
      <?php if(isset($error)): ?>
          <div class='error'>
              <p>Login failed. Please double check your email and password.</p>
          </div>
      <?php endif; ?>

     <button type='Submit' class='btn btn-royalty btn-lg'>Log in</button>
    </form>
</div>

