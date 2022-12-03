let confirmation = document.getElementById('confirmation');
let continueBtn = document.getElementById('continueBtn');
let account = document.getElementById('account');
let closeBtn = document.getElementById('closeBtn');
let messageBox = document.getElementById('messageBox');
let formDetails = document.querySelector('form');

account.style.display = "none";
messageBox.style.display = "none";

continueBtn.addEventListener('click', function () {
    if (confirmation.checked) {
        account.style.display = "flex";
        account.style.margin = "auto";
        account.style.top = "70px";
        account.showModal();
    }
    else {
        alert('Please agree to our terms and conditions first');
    }
});

closeBtn.addEventListener('click', function () {
    account.style.display = "none";
    account.close();
});

formDetails.addEventListener('submit', (events) => {
    events.preventDefault();
    console.log(`form submitted...`);
    messageBox.style.display = "grid";
    messageBox.innerHTML = "<p> Your account is being created, please wait... </p>";

    setTimeout(() => {
        messageBox.innerHTML = "<p> Your account has been created </p>";
    }, 2000);

});