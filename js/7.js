let n = 0;
let values = ["5", "10", "15"];

for (let k = 0; k < values.length; k++) {

    n = values[k];

    for (let i = 0; i < n; i++) {

        for (let j = 0; j <= i; j++) {
            document.write("*");
            document.write("&nbsp; &nbsp;")
        }
        document.write("<br/>");

    }

    document.write("<br/>");

}