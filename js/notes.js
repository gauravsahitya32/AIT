let createNoteBtn = document.getElementById('button1');
let content = document.getElementById('content');
let divElement, nesteddivEle;

let htmlEleAttr = {};

const elementCreator = (appender, element, attributes = {}, innerText = undefined) => {
    let htmlElement = document.createElement(`${element}`);

    for (let attribute in attributes)
        htmlElement.setAttribute(`${attribute}`, attributes[attribute]);

    if (innerText)
        htmlElement.innerText = innerText;

    appender.append(htmlElement);
    return htmlElement;
}

createNoteBtn.addEventListener('click', () => {
    divElement = document.createElement('div');
    divElement.setAttribute('class', 'align align-ver container');
    content.innerHTML = '';

    htmlEleAttr = {
        "type": "text",
        "placeholder": "SUBJECT",
        "required": '',
        "id": "title"
    }
    elementCreator(divElement, 'input', htmlEleAttr);

    htmlEleAttr = {
        "placeholder": "NOTE DESCRIPTION",
        "required": '',
        "id": "note",
        "row": 50,
        "col": 300
    }
    elementCreator(divElement, 'textarea', htmlEleAttr);

    htmlEleAttr = {
        class: 'align'
    }
    nesteddivEle = elementCreator(divElement, 'div', htmlEleAttr);

    htmlEleAttr = {
        type: 'button',
        id: 'addBtn'
    }
    elementCreator(nesteddivEle, 'button', htmlEleAttr, 'Add').addEventListener('click', () => {
        console.log(`Add button clicked`);
        let msgBox = document.getElementById('msgBox');
        msgBox.style.display = "flex";
    });

    htmlEleAttr = {
        type: 'button',
        id: 'cnBtn',
        class: 'cn-btn'
    }
    elementCreator(nesteddivEle, 'button', htmlEleAttr, 'Cancel').addEventListener('click', () => {
        divElement.style.display = "none";
        content.innerHTML = "<p class='paras'>Nothing to show as of now, please click on the <span>create a note</span> to create a new note</p>";
    });

    htmlEleAttr = {
        id: `msgBox`,
        class: `paras`
    }
    elementCreator(divElement, 'p', htmlEleAttr, 'Your note has been created').style.display = "none";

    content.append(divElement);
});