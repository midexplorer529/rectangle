document.querySelector(".change-color").onclick = function () {
    document.querySelector(".rectangle").classList.toggle("color-active");
    // document.querySelector(".rectangle").style.backgroundColor = !document.querySelector(".changeColor").classList.contains("colorActive") ? '#ccc' : '#f1c40f';

}

document.querySelector(".make-square").onclick = function () {
    document.querySelector(".rectangle").classList.toggle("square-active");
    // document.querySelector(".rectangle").style.width = !document.querySelector(".makeSquare").classList.contains("squareActive") ? '100%' : '300px';
}

document.querySelector(".rotate").onclick = function () {
    document.querySelector(".rectangle").classList.toggle("rotate-active");
    // document.querySelector(".rectangle").style.width = '300px';
    // document.querySelector(".rectangle").style.height = '300px';
    // document.querySelector(".rectangle").style.transform = !document.querySelector(".rotate").classList.contains("rotateActive") ? 'rotate(0deg)' : 'rotate(45deg)';
}



document.querySelector(".make-round").onclick = function () {
    document.querySelector(".rectangle").classList.toggle("round-active");
    // document.querySelector(".rectangle").style.borderRadius = !document.querySelector(".makeRound").classList.contains("roundActive") ? '0' : '50%';
}

document.querySelector(".all-in-one").onclick = function () {
    document.querySelector(".rectangle").classList.toggle("color-active");
    setTimeout(() => document.querySelector(".rectangle").classList.toggle("square-active"), 1000);
    setTimeout(() => document.querySelector(".rectangle").classList.toggle("rotate-active"), 2000);
    // setTimeout(() => document.querySelector(".rectangle").style.width = '300px', 2000);
    // setTimeout(() => document.querySelector(".rectangle").style.heigth = '300px', 2000);
    setTimeout(() => document.querySelector(".rectangle").classList.toggle("round-active"), 3000);
}

// document.querySelector(".allInOne").onclick = function () {
//     document.querySelector(".rectangle").style.backgroundColor = '#f1c40f';
//     setTimeout(() => document.querySelector(".rectangle").style.width = '300px', 1000);
//     setTimeout(() => document.querySelector(".rectangle").style.transform = 'rotate(45deg)', 2000);
//     // setTimeout(() => document.querySelector(".rectangle").style.width = '300px', 2000);
//     // setTimeout(() => document.querySelector(".rectangle").style.heigth = '300px', 2000);
//     setTimeout(() => document.querySelector(".rectangle").style.borderRadius = '50%', 3000);
// }

document.querySelector(".reset").onclick = function () {
    document.querySelector(".rectangle").classList.remove("round-active");
    document.querySelector(".rectangle").classList.remove("rotate-active");
    // setTimeout(() => document.querySelector(".rectangle").style.height = '300px', 1000);
    setTimeout(() => document.querySelector(".rectangle").classList.remove("square-active"), 1000);
    setTimeout(() => document.querySelector(".rectangle").classList.remove("color-active"), 1000);
}


// document.querySelector(".reset").onclick = function () {
//     document.querySelector(".rectangle").style.borderRadius = '0';
//     document.querySelector(".rectangle").style.transform = 'rotate(0deg)';
//     // setTimeout(() => document.querySelector(".rectangle").style.height = '300px', 1000);
//     setTimeout(() => document.querySelector(".rectangle").style.width = '100%', 1000);
//     setTimeout(() => document.querySelector(".rectangle").style.backgroundColor = '#ccc', 1000);
// }
