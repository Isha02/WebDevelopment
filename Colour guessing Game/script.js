var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("rgb");
var msgDisplay = document.getElementById("message");
var h1 = document.getElementById("heading1");
var newColorButton = document.getElementById("newColor");
var modes = document.getElementsByClassName("mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modes.length; i++) {
        modes[i].addEventListener("click", function () {
            modes[0].classList.remove("selected");
            modes[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                h1.style.background = clickedColor;
                newColorButton.textContent = "Play Again ?";
                msgDisplay.textContent = "Correct !";
                changeColors(clickedColor);
            }
            else {
                this.style.backgroundColor = "#232323";
                msgDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    msgDisplay.textContent = "";
    newColorButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        h1.style.background = "steelblue";
    }
}

newColorButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < color.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}