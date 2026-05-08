const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', (e) => {
    const user = document.querySelector('#username').value;
    if (user) {
        document.cookie = `username=${user}`;
        document.location.href = '/';
    }
    else {
        alert('Please enter a username');
    }
});