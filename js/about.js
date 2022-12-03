let connect = document.getElementById('connect');
let contactForm = document.getElementById('contact-form');
let sendButton = document.getElementById('send-button');
let url, response, responseMsg;

connect.addEventListener('click', function () {

    window.open('https://www.linkedin.com/in/gaurav-s-934a14125?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfZmMgusyTDKj3P1uYFYpAA%3D%3D', '_blank');

});

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(contactForm);
    url = new URLSearchParams(formData);


    let request = {
        method: 'POST',
        body: url,
        mode: `cors`
    }


    sendButton.innerText = 'Sending';
    sendButton.disabled = true;

    response = await fetch('http://127.0.0.1:8081/contact/', request);
    responseMsg = await response.json();

    if (response.status === 201) {
        alert('Your query has been successfully posted, our support team will contact with you shortly regarding your query you just posted.');
        sendButton.innerText = `Send`;
        sendButton.disabled = false;
    }
    else if (response.status === 400) {
        alert('Please fill the form completely and correctly, do not enter the bogus information in it.');
        sendButton.innerText = `Send`;
        sendButton.disabled = false;
    }
    else {
        alert('Something went wrong, please try again after sometime.');
        sendButton.innerText = `Send`;
        sendButton.disabled = false;
    }
  

});