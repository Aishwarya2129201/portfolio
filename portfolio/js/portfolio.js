function validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const suggest = document.getElementById('suggest').value;

    let error = false;

    //Suggestion
    if (suggest === "") {
        document.getElementById("suggest_error").innerHTML = "The suggestion box cannot be empty";
        error = true;
    } else {
        document.getElementById("suggest_error").innerHTML = "";
    }

    //Name
    if (name === "") {
        // console.log("Name is required.");
        document.getElementById("name_error").innerHTML = "Name is required.";
        error = true;
    } else {
        document.getElementById("name_error").innerHTML = "";
    }

    //Email
    let atPos = email.indexOf('@');
    let dotPos = email.lastIndexOf('.');
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Email ID is required.";
        error = true;
        // Check for multiple @s
    } else if (atPos <= 0 || dotPos <= 0 || (dotPos - atPos) <= 4 || dotPos == email.length - 1) {
        document.getElementById("email_error").innerHTML = "Please provide a valid email id";
        error = true;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }



    if (error) {
        return false;
    } else {
        return true;
    }

    // document.getElementById("").addEventListener("click", function(event) {
    //     event.preventDefault()
    // });
}