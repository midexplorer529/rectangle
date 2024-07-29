document.getElementById("changeColor").onclick = function () {
    document.getElementById("rectangle").style.backgroundColor = '#f1c40f';
}

document.getElementById("makeSquare").onclick = function () {
    document.getElementById("rectangle").style.width = '400px';
}

document.getElementById("rotate").onclick = function () {
    document.getElementById("rectangle").style.width = '300px';
    document.getElementById("rectangle").style.height = '300px';
    document.getElementById("rectangle").style.transform = 'rotate(45deg)';
}



document.getElementById("makeRound").onclick = function () {
    document.getElementById("rectangle").style.borderRadius = '50%';
}

document.getElementById("allInOne").onclick = function () {
    document.getElementById("rectangle").style.backgroundColor = '#f1c40f';
    document.getElementById("rectangle").style.width = '400px';
    document.getElementById("rectangle").style.transform = 'rotate(45deg)';
    document.getElementById("rectangle").style.borderRadius = '50%';
}

document.getElementById("reset").onclick = function () {
    document.getElementById("rectangle").style.width = 'auto';
    document.getElementById("rectangle").style.height = '400px';
    document.getElementById("rectangle").style.borderRadius = '0';
    document.getElementById("rectangle").style.transform = 'rotate(0deg)';
    document.getElementById("rectangle").style.backgroundColor = 'grey';
}



