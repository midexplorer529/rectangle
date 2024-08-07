var degree = 0;
var color = 0;
const rectangle = $(".rectangle");

function getDegree() {
    degree = $(".degree").val();
};

function getColor() {
    // Prioritize the color picker value if it's not the default
    color = $(".hex").val();
    // console.log(color);
};

function changeColor() {
    getColor();
    if (!color) {
        return;
    };
    rectangle.toggleClass("color-active");
    rectangle.css("background-color", rectangle.hasClass("color-active") ? `${color}` : "#ccc");
    $(".message").append("<p>Color Changed</p>");
    setTimeout(() => $("p").remove(), 3000);
};

$(".change-color").click(changeColor);

// $(".change-color").click(function () {
//     getColor();
//     rectangle.toggleClass("color-active");
//     rectangle.css("background-color", rectangle.hasClass("color-active") ? `${color}` : "#ccc");
// });

function makeSquare() {
    rectangle.toggleClass("square-active");
    $(".message").append("<p>Made Square</p>");
    setTimeout(() => $("p").remove(), 3000);
};

$(".make-square").click(makeSquare);

// $(".make-square").click(function () {
//     rectangle.toggleClass("square-active");
// });

function rotate() {
    getDegree();
    if (!degree) {
        return;
    };
    rectangle.toggleClass("rotate-active")
    rectangle.css("transform", rectangle.hasClass("rotate-active") ? `rotate(${degree}deg)` : "rotate(0deg)");
    $(".message").append("<p>Rotated</p>");
    setTimeout(() => $("p").remove(), 3000);
};

$(".rotate").click(rotate);

// $(".rotate").click(function () {
//     getDegree();
//     rectangle.toggleClass("rotate-active")
//     rectangle.css("transform", rectangle.hasClass("rotate-active") ? `rotate(${degree}deg)` : "rotate(0deg)");
// });

function makeRound() {
    rectangle.toggleClass("round-active");
    $(".message").append("<p>Made Round</p>");
    setTimeout(() => $("p").remove(), 3000);
};

$(".make-round").click(makeRound);

// $(".make-round").click(function () {
//     rectangle.toggleClass("round-active");
// });

function reset() {
    rectangle.removeClass("round-active");
    rectangle.removeClass("rotate-active");
    rectangle.css("transform", "rotate(0deg)");
    rectangle.removeClass("square-active");
    rectangle.removeClass("color-active");
    rectangle.css("background-color", "#ccc");
}

function checkAndRunFunctions() {
    const classesToCheck = ["color-active", "square-active", "rotate-active", "round-active"];
    let hasClass = false;

    for (let i = 0; i < classesToCheck.length; i++) {
        if (rectangle.hasClass(classesToCheck[i])) {
            hasClass = true;
            break;
        }
    }

    if (hasClass) {
        reset();
        setTimeout(changeColor, 1000);
        setTimeout(makeSquare, 2000);
        setTimeout(rotate, 3000);
        setTimeout(makeRound, 4000);
    } else {
        // Run your functions sequentially or based on your logic
        setTimeout(changeColor, 0);
        setTimeout(makeSquare, 1000);
        setTimeout(rotate, 2000);
        setTimeout(makeRound, 3000);
    }
}

$(".all-in-one").click(checkAndRunFunctions);

$(".reset").click(function () {
    setTimeout(function () {
        rectangle.removeClass("round-active");
    }, 0);

    setTimeout(function () {
        rectangle.removeClass("rotate-active");
        rectangle.css("transform", "rotate(0deg)");
    }, 0);

    setTimeout(function () {
        rectangle.removeClass("square-active");
    }, 1000);

    setTimeout(function () {
        rectangle.removeClass("color-active");
        rectangle.css("background-color", "#ccc");
    }, 1000);
});