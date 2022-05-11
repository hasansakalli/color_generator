const colorNumberRed = document.querySelector("#colorNumberRed");
const colorNumberBlue = document.querySelector("#colorNumberBlue");
const colorNumberGreen = document.querySelector("#colorNumberGreen");
// const colorNumberFix = document.querySelector("#colorNumberFix");
const inputRed = document.querySelector("#inputRed");
const inputBlue = document.querySelector("#inputBlue");
const inputGreen = document.querySelector("#inputGreen");
// const inputFix = document.querySelector("#inputFix");
const input = document.querySelector("input");
let colorNumber = document.querySelector("#colorNumber");
let colorBox = document.querySelector(".colorBox");
let colors;


function start() {

    colorNumberRed.innerHTML = inputRed.value;
    colorNumberBlue.innerHTML = inputBlue.value;
    colorNumberGreen.innerHTML = inputGreen.value;
    // colorNumberFix.innerHTML = inputFix.value;

    colors = colorNumber.innerHTML =
        "rgb(" +
        inputRed.value +
        "," +
        inputGreen.value +
        "," +
        inputBlue.value +

        // "," +
        // inputFix.value +
        ")";

    colorBox.style.backgroundColor = colors
    colorNumber.style.color = colors


}