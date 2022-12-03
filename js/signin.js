let username = document.getElementById('username');
let password = document.getElementById('password');
let labels = document.querySelectorAll('label');

username.addEventListener('focus', () => {

    setTimeout(() => {
        labels[0].style.display = "none";
    }, 20);

});

username.addEventListener('focusout', () => {

    setTimeout(() => {
        labels[0].style.display = "flex";
    }, 20);

});

password.addEventListener('focus', () => {

    setTimeout(() => {
        labels[1].style.display = "none";
    }, 20);

});

password.addEventListener('focusout', () => {

    setTimeout(() => {
        labels[1].style.display = "flex";
    }, 20);

});