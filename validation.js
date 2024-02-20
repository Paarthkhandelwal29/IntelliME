function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    var atposition = username.indexOf("@");
    var dotposition = username.lastIndexOf(".");
    var validChars = /^[a-zA-Z0-9]+$/;
    var validPassword = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/;

    if (username === "" || password === "") {
        alert("Both fields must be filled out");
        return false;
    }

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= username.length) {
        alert("Please enter a valid e-mail address");
        return false;
    }

    if (!password.match(validPassword)) {
        alert("Please enter a valid password. It should contain an uppercase letter, a number, and must not contain any special characters other than @");
        return false;
    }

    // Check if the entered password is the required one for redirection
    if (password === "PaarthK@29") {
        // Redirect to the dashboard page (replace with the actual dashboard URL)
        window.location.href = "index.html";
        return false; // Prevent form submission since we're redirecting
    } else {
        // Show an error message for incorrect passwords
        alert("Incorrect password. Please try again or click on 'Forgot your password' to reset it.");
        return false;
    }
}