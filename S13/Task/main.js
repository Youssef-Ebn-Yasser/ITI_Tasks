
let addNumberOne = document.getElementById("add-num1");
let addNumberTwo = document.getElementById("add-num2");
let additionText = document.querySelector(".add-value");


console.log(addNumberOne.value);
console.log(addNumberTwo.value);

function sum() {
    let value1 = Number(addNumberOne.value);
    let value2 = Number(addNumberTwo.value);
    let addition = value1 + value2;

    additionText.textContent = addition;
}

addNumberOne.addEventListener("input", sum);
addNumberTwo.addEventListener("input", sum);



let mulNumberOne = document.getElementById("mul-num1");
let mulNumberTwo = document.getElementById("mul-num2");
let mulitionText = document.querySelector(".mul-value");


function mul() {
    let value1 = Number(mulNumberOne.value);
    let value2 = Number(mulNumberTwo.value);
    let multiplication = value1 * value2;

    mulitionText.textContent = multiplication;
}

mulNumberOne.addEventListener("input", mul);
mulNumberTwo.addEventListener("input", mul);



let subNumberOne = document.getElementById("sub-num1");
let subNumberTwo = document.getElementById("sub-num2");
let subitionText = document.querySelector(".sub-value");

function sub() {
    let value1 = Number(subNumberOne.value);
    let value2 = Number(subNumberTwo.value);
    let subtract = value1 - value2;

    subitionText.textContent = subtract;
}

subNumberOne.addEventListener("input", sub);
subNumberTwo.addEventListener("input", sub);


let divNumberOne = document.getElementById("div-num1");
let divNumberTwo = document.getElementById("div-num2");
let divitionText = document.querySelector(".div-value");


console.log(divNumberOne);
console.log(divNumberTwo);

function div() {
    let value1 = Number(divNumberOne.value);
    let value2 = Number(divNumberTwo.value);

     let division;
    if(value2 === 0){
        divNumberTwo.value=1;
         division = value1 / 1;
    }
    else {
         division = value1 / value2;
    }

    divitionText.textContent = division;

}


divNumberOne.addEventListener("input", div);
divNumberTwo.addEventListener("input", div);
