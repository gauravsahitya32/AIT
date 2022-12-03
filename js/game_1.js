let label1 = document.getElementById("label1");
let screen = document.getElementById("screen1");
let target = document.getElementById("target");
let an_target = document.getElementById("an_target");
let label2 = document.getElementById("label2");
let bullets = 100;
let score = 100;
let controls = document.getElementById("control1");


label1.innerText = "Player 1 : " + bullets;
label2.innerText = "Player 2 : " + score;

screen.onclick = function() {

    if (bullets > 0) {
        label1.innerText = "Player 1 : " + bullets;
        label2.innerText = "Player 2 : " + score;
    } else {
        target.style.display = "none";
        controls.style.display = "none";
        screen.innerText = "GAME OVER !!!\n";
        screen.innerText += "Player 1 : " + bullets + "\n";
        screen.innerText += "Player 2 : " + score + "\n";
    }

}

target.onclick = function() {

    if (bullets > 0) {
        bullets -= 5;
        label1.innerText = "Player 1 : " + bullets;
        label2.innerText = "Player 2 : " + score;
    } else if (bullets == 0) {
        bullets = -5;
        label1.innerText = "Player 1 : " + bullets;
        label2.innerText = "Player 2 : " + score;
    } else {
        bullets = 0;
        target.style.display = "none";
        controls.style.display = "none";
        screen.innerText = "GAME OVER !!!\n";
        screen.innerText += "Player 1 : " + bullets + "\n";
        screen.innerText += "Player 2 : " + score + "\n";
    }

}


an_target.onclick = function() {

    if (bullets > 0) {
        score -= 5;
        label1.innerText = "Player 1 : " + bullets;
        label2.innerText = "Player 2 : " + score;
    } else if (bullets == 0) {
        score -= 5;
        label1.innerText = "Player 1 : " + bullets;
        label2.innerText = "Player 2 : " + score;
    } else {
        bullets = 0;
        target.style.display = "none";
        controls.style.display = "none";
        screen.innerText = "GAME OVER !!!\n";
        screen.innerText += "Player 1 : " + bullets + "\n";
        screen.innerText += "Player 2 : " + score + "\n";
    }

}