var degree = 0;
var color = 0;

function getDegree() {
    degree = $(".degree").val();
};

function getColor() {
    color = $(".color").val();
};

function changeColor() {
    getColor();
    $(".rectangle").toggleClass("color-active");
    $(".rectangle").css("background-color", $(".rectangle").hasClass("color-active") ? `${color}` : "#ccc");
};

$(".change-color").click(changeColor);

// $(".change-color").click(function () {
//     getColor();
//     $(".rectangle").toggleClass("color-active");
//     $(".rectangle").css("background-color", $(".rectangle").hasClass("color-active") ? `${color}` : "#ccc");
// });

function makeSquare() {
    $(".rectangle").toggleClass("square-active");
};

$(".make-square").click(makeSquare);

// $(".make-square").click(function () {
//     $(".rectangle").toggleClass("square-active");
// });

function rotate() {
    getDegree();
    $(".rectangle").toggleClass("rotate-active")
    $(".rectangle").css("transform", $(".rectangle").hasClass("rotate-active") ? `rotate(${degree}deg)` : "rotate(0deg)");
};

$(".rotate").click(rotate);

// $(".rotate").click(function () {
//     getDegree();
//     $(".rectangle").toggleClass("rotate-active")
//     $(".rectangle").css("transform", $(".rectangle").hasClass("rotate-active") ? `rotate(${degree}deg)` : "rotate(0deg)");
// });

function makeRound() {
    $(".rectangle").toggleClass("round-active");
};

$(".make-round").click(makeRound);

// $(".make-round").click(function () {
//     $(".rectangle").toggleClass("round-active");
// });

$(".all-in-one").click(function () {
    setTimeout(changeColor, 0);

    setTimeout(makeSquare, 1000);

    setTimeout(rotate, 2000);

    setTimeout(makeRound, 3000);
});

$(".reset").click(function () {
    setTimeout(function () {
        $(".rectangle").removeClass("round-active");
    }, 0);

    setTimeout(function () {
        $(".rectangle").removeClass("rotate-active");
        $(".rectangle").css("transform", "rotate(0deg)");
    }, 0);

    setTimeout(function () {
        $(".rectangle").removeClass("square-active");
    }, 1000);

    setTimeout(function () {
        $(".rectangle").removeClass("color-active");
        $(".rectangle").css("background-color", "#ccc");
    }, 1000);
});