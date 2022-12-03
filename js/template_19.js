let addBookDlg = document.getElementById('addBook');
let addBtn = document.getElementById('add');
let closeBtn = document.getElementById('closeBtn');

addBookDlg.style.display = "none";

addBtn.addEventListener('click',function(){
    addBookDlg.style.display = "flex";
    addBookDlg.style.margin = "auto";
    addBookDlg.style.top = "50px";
    addBookDlg.showModal();
});

closeBtn.addEventListener('click',function(){
    addBookDlg.close();
    addBookDlg.style.display = "none";
});