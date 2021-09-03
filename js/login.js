document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'abc@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    else{
        // alert('your entered email or password is not correct!!')
    const errorMsg = document.getElementById('error-msg')
    errorMsg.style.display = 'block';
    }
});


