let error_diag = document.getElementById("error");
let textBox1 = document.getElementById("textBox1");
let textBox2 = document.getElementById("textBox2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

error_diag.style.display = "none";

button1.addEventListener("click",function(){

    if(textBox1.value == 'sahityagaurav4210' && textBox2.value == 'Gs@$1034@admin'){
        error_diag.innerText = "Successfully logged in...";
        error_diag.style.backgroundColor = "#064635";
        error_diag.style.display = "flex";


        setTimeout(() => {
            error_diag.style.display = "none";
            window.open('https://www.google.com');
        }, 4000);
    }
    else{
        error_diag.innerText = "Incorrect credentials";
        error_diag.style.backgroundColor = "#FF1700";
        error_diag.style.display = "flex";

        setTimeout(() => {
            error_diag.style.display = "none";
        }, 4000);
    }

});

button2.addEventListener("click",function(){

    textBox1.value = '';
    textBox2.value = '';

    textBox1.focus();

});