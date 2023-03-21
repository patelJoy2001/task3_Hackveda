function check() {

    var val = document.getElementById('age').value;

    if (val > 18) {
        document.getElementById('print').innerHTML = "You are eligible.";
    }
    else {
        document.getElementById('print').innerHTML = "You are not eligible.Please click on Try again...";
    }
}

function setColor() {
    var color = document.getElementById("bg").value;
    document.getElementById('box2').style.backgroundColor = color;
}

function reload() {
    location.reload();
}

function printArr() {

    var myArr = [];
    myArr.push(document.getElementById('col1').value);
    myArr.push(document.getElementById('col2').value);
    myArr.push(document.getElementById('col3').value);
    myArr.push(document.getElementById('col4').value);
    myArr.push(document.getElementById('col5').value);

    for (var y = 0; y < myArr.length; y++) {
        document.getElementById('b' + (y + 1)).style.backgroundColor = myArr[y];
    }

    let text = "";
    let u = 1;
    for (let x of myArr) {
        text += "The color of box" + u + " is : " + x + "<br>";
        u++
    }

    document.getElementById("arr").innerHTML = text;
}






