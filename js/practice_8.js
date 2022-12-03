let writter = document.getElementById("writter");
let word = "Hello";

for (let i = 0; i < word.length; i++) {
    setTimeout(() => {
        writter.innerText += word[i];
    }, 1000);
}