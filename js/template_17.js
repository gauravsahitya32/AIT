let button1 = document.getElementById('button1');
let button3 = document.getElementById('close');
let cnf_msg = document.getElementById('cnf_msg');

cnf_msg.style.display = "none";


if (cnf_msg.contains('.paras')) {
    cnf_msg.style.display = "flex";
    cnf_msg.style.margin = "auto";
    cnf_msg.showModal();
}

button3.addEventListener('click',function(){
    cnf_msg.close();
    cnf_msg.style.display = "none";
});