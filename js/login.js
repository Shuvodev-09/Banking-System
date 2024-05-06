document.getElementById('error').style.display ='none';

document.getElementById('submit-button').addEventListener('click',function(){
    // get the email form input field
    const emailField = document.getElementById('user-email'); 
    const email = emailField.value;

    // get the password form input field
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;

   document.getElementById('error').style.display ='none';

   if(email == "admin@gmail.com" && password == 123456) {
    document.getElementById('error').style.display ='none';
    window.location.href = "banking.html"

   } else {
    document.getElementById('error').style.display ='block';
    emailField.value = ''
    passwordField.value = ''

   }

    
})