document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let address = document.getElementById("address").value.trim();

    let errorMessage = document.getElementById("errorMessage");
    errorMessage.innerHTML = ""; // Clear previous error messages

    // Regex patterns
    let phonePattern = /^\d{11}$/; // Must be exactly 11 digits
    let passwordPattern = /^(?=.*[0-9])(?=.*[\W_]).{6,}$/; // At least one number and one special character

    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "" || age === "" || gender === "" || address === "") {
        errorMessage.innerHTML = "All fields are required!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMessage.innerHTML = "Enter a valid email address!";
        return;
    }

    if (!phonePattern.test(phone)) {
        errorMessage.innerHTML = "Phone number must be exactly 11 digits and contain only numbers!";
        return;
    }

    if (!passwordPattern.test(password)) {
        errorMessage.innerHTML = "Password must contain at least one number and one special character!";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match!";
        return;
    }

    if (age < 18 || age > 99) {
        errorMessage.innerHTML = "Age must be between 18 and 99!";
        return;
    }

    // If everything is valid
    alert("Sign Up Successful!");
    this.reset(); // Reset form
});
