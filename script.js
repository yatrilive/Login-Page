document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        let isValid = true;

        if (username === '') {
            alert('Username is required.');
            isValid = false;
        }

        if (password === '') {
            alert('Password is required.');
            isValid = false;
        }

        if (confirmPassword === '') {
            alert('Confirm Password is required.');
            isValid = false;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            isValid = false;
        }

        if (isValid) {
            alert(`Successfully Logged In\nUsername: ${username}`);
            window.location.href = 'homepage.html';
        }
    });
});
