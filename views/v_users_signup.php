<H2>Sign Up</h2>
  <!--If errors - display message-->
    <?php if(isset($error)): ?>
        <div class='error'>
            <p>All fields are required. Please sign up again.</p>
        </div>
    <?php endif; ?>
    


<form class="box" method='POST' action='/users/p_signup'>

    First Name :<input type='text' id='first_name' name='first_name'>
    <br><br>

    Last Name:<input type='text' id='last_name' name='last_name'>
    <br><br>

    Email:<input type='text' id='email' name='email'>
    <br><br>

    Password:<input type='password' id='password' name='password'>
    <br><br>

    <input type='submit' class='button' value='Sign Up'>
</form>