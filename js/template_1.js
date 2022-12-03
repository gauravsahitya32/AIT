let button2 = document.getElementById("button2");
let shadow = document.getElementById("shadow1");
let form = document.getElementById("form1");
let image = document.getElementById("image1");
let label = document.getElementById("label1");

image.style.display = "none";
label.style.display = "none";

button2.onclick = function () {
    shadow.style.display = "flex";
    form.style.display = "none";


    setTimeout(() => {
        image.style.display = "block";
        label.style.display = "block";
    }, 1773);

    setTimeout(() => {

        shadow.style.display = "none";
        form.style.display = "flex";

    }, 9000);
}