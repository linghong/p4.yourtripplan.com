<h2>Log in</h2>
<form class="box" method='POST' action='/users/p_login'>
   Email: <input type='text' name='email'><br><br>

   Password: <input type='password' name='password'><br><br>

    <!--If errors - display message-->
    <?php if(isset($error)): ?>
        <div class='error'>
            <p>Login failed. Please double check your email and password.</p>
        </div>
    <?php endif; ?>

   <input type='Submit' class='button' value='Log in'>
   
</form>