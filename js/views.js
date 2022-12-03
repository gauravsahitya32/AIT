let dialogs = document.getElementById('dialogs');
let msgBoxes = document.querySelectorAll('dialog');
let forms = document.querySelectorAll('form');
let updateBtn = document.getElementById('updateBtn');

dialogs.style.display = "none";

console.log('Javascript connected');

for (let i = 0; i < msgBoxes.length; i++) {
    msgBoxes[i].style.display = "none";
}

forms[1].addEventListener('click', function (e) {

    e.preventDefault();

    dialogs.style.display = "flex";
    msgBoxes[0].style.display = "flex";
    msgBoxes[0].showModal();
});

updateBtn.addEventListener('submit',function(e){

    e.preventDefault();
    msgBoxes[0].innerHTML = '';
    msgBoxes[0].style.backgroundColor = '#F73859';
    msgBoxes[0].innerText = "Your book has been deleted!!!";


    setTimeout(() => {
        msgBoxes[0].style.display = "none";
        msgBoxes[0].close();
    }, 2750);

});