let message =  document.getElementById("message");
let button2 = document.getElementById("button2");

message.style.display = "none";

button2.addEventListener("click",function(){
    message.style.display = "flex";

    setTimeout(() => {
        message.style.display = "none";
    }, 4000);
});