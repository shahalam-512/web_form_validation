document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("signupUsername").value.trim();
    let email = document.getElementById("signupEmail").value.trim();
    let password = document.getElementById("signupPassword").value.trim();
    let age = document.getElementById("signupAge").value.trim();

    let usernameError = document.getElementById("signupUsernameError");
    let emailError = document.getElementById("signupEmailError");
    let passwordError = document.getElementById("signupPasswordError");
    let ageError = document.getElementById("signupAgeError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    ageError.textContent = "";

    let isValid = true;

    // Username validation: Should not be empty
    if (username === "") {
        usernameError.textContent = "Username cannot be empty!";
        isValid = false;
    }

    // Email validation: Must be a valid email format
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format!";
        isValid = false;
    }

    // Password validation: At least 6 characters, one number, one special character
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters, contain a number and a special character!";
        isValid = false;
    }

    // Age validation: Must be a number between 18 and 100
    let ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 100) {
        ageError.textContent = "Age must be between 18 and 100!";
        isValid = false;
    }

    if (isValid) {
        alert("Sign Up Successful!");
        this.submit();
    }
});
