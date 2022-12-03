let arrays = [["Gaurav", "Sahitya"], ["Dheeraj", "Kumar"], ["Pawan", "Kumar"]];


for (let i = 0; i < arrays.length; i++) {

    for (let j = 0; j < arrays[i].length - 1; j++) {
        document.write("My name is " + arrays[i][j] + " " + arrays[i][j + 1] + "<br/>");
    }
}