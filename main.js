document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const msg = document.getElementById('msg');

    // Handle Sign Up
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const pw = document.getElementById('signupPassword').value;
            const re_pw = document.getElementById('signupConfirmPassword').value;

            if (name.length == 0) {
                alert('Please fill in Username');
            } else if (email.length == 0) {
                alert('Please fill in Email');
            } else if (pw.length == 0) {
                alert('Please fill in Password');
            } else if (pw !== re_pw) {
                alert('Passwords do not match');
            } else {
                localStorage.setItem('name', name);
                localStorage.setItem('pw', pw);
                localStorage.setItem('email', email);
                alert('User Registration Successful !');
                window.location.href = "index.html";
            }
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const storedName = localStorage.getItem('name');
            const storedPw = localStorage.getItem('pw');

            const userName = document.getElementById('loginUsername').value;
            const userPw = document.getElementById('loginPassword').value;

            if (userName === storedName && userPw === storedPw) {
                alert('You are logged in.');
                window.location.href = "home.html";
            } else {
                alert('Error on login');
            }
        });
    }
});
