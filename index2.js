var degree = 0;
var color = 0;
const rectangle = $(".rectangle");

function getDegree() {
    degree = $(".degree").val();
};

function getColor() {
    // Prioritize the color picker value if it's not the default
    color = $(".hex").val();
};

function bootstrapAlert(message, type) {
    $.bootstrapGrowl(message, {
        ele: 'body', // which element to append to
        type: type, // (null, 'info', 'danger', 'success')
        offset: { from: 'top', amount: 20 }, // 'top', or 'bottom'
        align: 'right', // ('left', 'right', or 'center')
        width: 250, // (integer, or 'auto')
        delay: 4000, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
        allow_dismiss: false, // If true then will display a cross to close the popup.
        stackup_spacing: 10 // spacing between consecutively stacked growls.
    });
};

function changeColor() {
    getColor();
    if (!color) {
        return;
    };
    rectangle.toggleClass("color-active");
    rectangle.css("background-color", rectangle.hasClass("color-active") ? `${color}` : "#ccc");
    bootstrapAlert("Color Changed", "primary");
};

$(".change-color").click(changeColor);
$(document).keyup(function (event) {
    // if (event.which == 49) {
    //     event.preventDefault();
    //     $(this).focus();
    //     changeColor();
    //     console.log(event.which)
    // }

    switch (event.which) {
        case 49:
            event.preventDefault();
            changeColor();
            console.log(event.which)
            break;
        case 50:
            event.preventDefault();
            makeSquare();
            console.log(event.which)
            break;
        case 51:
            event.preventDefault();
            rotate();
            console.log(event.which)
            break;
        case 52:
            event.preventDefault();
            makeRound();
            console.log(event.which)
            break;
        case 53:
            event.preventDefault();
            allInOne();
            console.log(event.which)
            break;
        case 54:
            event.preventDefault();
            reset();
            console.log(event.which)
            break;
    }
});

function makeSquare() {
    rectangle.toggleClass("square-active");
    bootstrapAlert("Width Changed", "secondary");
};

$(".make-square").click(makeSquare);

function rotate() {
    getDegree();
    if (!degree) {
        return;
    };
    rectangle.toggleClass("rotate-active");
    rectangle.css("transform", rectangle.hasClass("rotate-active") ? `rotate(${degree}deg)` : "rotate(0deg)");
    bootstrapAlert("Rotated", "info");
};

$(".rotate").click(rotate);

function makeRound() {
    rectangle.toggleClass("round-active");
    bootstrapAlert("Border Radius Changed", "warning");
};

$(".make-round").click(makeRound);

function reset() {
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
    bootstrapAlert("Reset...", "danger");
}

function allInOne() {
    const classesToCheck = ["color-active", "square-active", "rotate-active", "round-active"];
    let hasClass = false;

    for (let i = 0; i < classesToCheck.length; i++) {
        if (rectangle.hasClass(classesToCheck[i])) {
            hasClass = true;
            break;
        }
    }

    if (hasClass) {
        bootstrapAlert("All In One!", "success");
        rectangle.removeClass("round-active");
        rectangle.removeClass("rotate-active");
        rectangle.css("transform", "rotate(0deg)");
        rectangle.removeClass("square-active");
        rectangle.removeClass("color-active");
        rectangle.css("background-color", "#ccc");
        setTimeout(changeColor, 1000);
        setTimeout(makeSquare, 2000);
        setTimeout(rotate, 3000);
        setTimeout(makeRound, 4000);
    } else {
        // Run your functions sequentially or based on your logic
        bootstrapAlert("All In One!", "success");
        setTimeout(changeColor, 0);
        setTimeout(makeSquare, 1000);
        setTimeout(rotate, 2000);
        setTimeout(makeRound, 3000);
    }
}

$(".all-in-one").click(allInOne);

$(".reset").click(reset);