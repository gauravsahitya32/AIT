let distance = document.getElementById('distance');
let button1 = document.getElementById('button1');
let result = document.getElementById('result');
let calculatedMile = 0;

result.style.display = "none";

button1.addEventListener('click', function() {

    if (Number(distance.value)) {

        calculatedMile = Number(distance.value) * 1.61;

        result.style.display = "flex";
        result.innerText = "Distance in miles is " + calculatedMile;
        result.style.backgroundColor = "#694E4E";

        setTimeout(() => {
            result.style.display = "none";
        }, 10000);

    } else {
        result.style.display = "flex";
        result.innerText = "Please enter your distance in valid format!";
        result.backgroundColor = "#E60965";

        setTimeout(() => {
            result.style.display = "none";
        }, 10000);
    }
})