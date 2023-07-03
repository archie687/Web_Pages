// script.js
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    // Add your login logic here
    console.log("Login Form Submitted");
});

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    // Add your registration logic here
    console.log("Register Form Submitted");
});
