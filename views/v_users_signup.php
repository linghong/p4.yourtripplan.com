<div class="bx-outside">
    <H2>Sign Up</h2>
      <!--If errors - display message-->
        <?php if(isset($error)): ?>
            <div class='error'>
                <p>All fields are required. Please sign up again.</p>
            </div>
        <?php endif; ?>

    <form class="bx-inner" role="form" method='POST' action='/users/p_signup'>
        <div class="form-group">
            <label for="first_name">First Name</label>
            <input type='text' id='first_name' name='first_name' class='form-control' placeholder='First Name'>
        </div>
        <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type='text' id='last_name' name='last_name' class='form-control' placeholder='Last Name'>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type='text' id='email' name='email' class='form-control' placeholder='Email'>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type='password' id='password' name='password' class='form-control' placeholder='Password'>
        </div>

        <button  type='Submit' class="btn btn-royalty btn-lg">Sign Up </button>
    </form>
</div>