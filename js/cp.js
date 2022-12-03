let button1 = document.getElementById('button1');
let dialogs = document.querySelectorAll('dialog');
let button7 = document.getElementById('button7');

dialogs[0].style.display = "none";
dialogs[1].style.display = "none";

button1.addEventListener('click',function(){
    dialogs[0].style.display = "flex";
    dialogs[0].showModal();
});

button7.addEventListener('click',function(){
    dialogs[0].style.display = "none";
    dialogs[0].close();
});