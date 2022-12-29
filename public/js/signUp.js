const signUpForm = document.querySelector(".signup-form");

const signUpFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (name && password) {
        if (password.length < 8) {
            document.getElementById("errors").textContent = "invalid password";
            return
        }
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            document.getElementById("errors").textContent = "username has been taken"
        }
    } 
}

signUpForm.addEventListener("submit", signUpFormHandler)