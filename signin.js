document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("signinUsername").value.trim();
    let password = document.getElementById("signinPassword").value.trim();
    let usernameError = document.getElementById("signinUsernameError");
    let passwordError = document.getElementById("signinPasswordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Username validation: Should not be empty
    if (username === "") {
        usernameError.textContent = "Username cannot be empty!";
        isValid = false;
    }

    // Password validation: At least 6 characters, one number, one special character
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters, contain a number and a special character!";
        isValid = false;
    }

    if (isValid) {
        alert("Sign In Successful!");
        this.submit();
    }
});
