let container = document.getElementById("con1");
let label1 = document.getElementById("label1");

container.onmouseenter = function(){
    container.style.opacity = "0.45";
}

container.onmouseleave = function(){
    container.style.opacity = "1";
}