let button1 = document.getElementById('button1');
let data = document.getElementById('data');
let message = document.querySelector('p');
const correctSpelling = 'design and analysis of algorithms';
let spellArray = [];
let words = '';
let counter = 0;

message.style.display = "none";

button1.addEventListener('click', function () {

    for (let i = 0; i < correctSpelling.length; i++) {

        if (correctSpelling[i] != ' ') {
            words += correctSpelling[i];

            if (i == correctSpelling.length - 1) {
                spellArray.push(words);
                words = '';
            }
        }
        else {
            spellArray.push(words);
            words = '';
        }

    }

    

    words = '';
    spellArray = [];

});