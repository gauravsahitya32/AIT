let root = document.getElementById('root');
let messageBox = document.getElementById('dialogBox');
let button1 = document.getElementById('button1');
let close = document.getElementById('close');
let username = document.getElementById('username');
let password = document.getElementById('password');
let heading = document.querySelector('.heading');


messageBox.style.display = "none";

button1.addEventListener('click',function(){

    if(username.value == 'sahityagaurav4210' && password.value == 'Gs@$1034@admin'){
        
        messageBox.style.display = "flex";
        heading.innerHTML = "You've been signed in successfully.";
        heading.style.color = "green";
        messageBox.style.marginLeft = "auto";
        messageBox.style.marginRight = "auto";
        messageBox.showModal();

    }
    else{

        messageBox.style.display = "flex";
        heading.innerHTML = "Invalid credentials!!!";
        heading.style.color = "red";
        messageBox.style.marginLeft = "auto";
        messageBox.style.marginRight = "auto";
        messageBox.showModal();
    }
});

close.addEventListener('click',function(){
    messageBox.style.display = "none";
    messageBox.close();

    window.open('/?request=cp','_blank');
});