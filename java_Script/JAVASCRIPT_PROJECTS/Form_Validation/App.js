/* SIGNUP */
const signupForm = document.getElementById("signup-form");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("signup-name").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value.trim();
        const error = document.getElementById("signup-error");

        if (!name || !email || !password) {
            error.textContent = "All fields are required";
            return;
        }

        if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters";
            return;
        }

        error.style.color = "green";
        error.textContent = "Signup successful!";
    });
}

/* LOGIN */
const loginForm = document.getElementById("login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();
        const error = document.getElementById("login-error");

        if (!email || !password) {
            error.textContent = "All fields are required";
            return;
        }

        error.style.color = "green";
        error.textContent = "Login successful!";
    });
}
