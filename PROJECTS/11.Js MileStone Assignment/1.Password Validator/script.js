
function validatePassword(event) {
    event.preventDefault();

    let pass = document.getElementById("password").value;
    let cnfpass = document.getElementById("confirmPassword").value;

    passwordValidator(pass,cnfpass);
   

}

function passwordValidator(pass,cnfpass) {
    (pass===cnfpass)?console.log("Password Matched Successful!"):console.log("Password didn't matched !");
}