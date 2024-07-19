//Result field connection
const resultField = document.querySelector("#result")

//button connections
const btnC = document.querySelector(".btnC");
const btnPlus = document.querySelector(".btnPlus");
const btnEquals = document.querySelector(".btnE");
const btnDec = document.querySelector(".btnDec");
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const btnMinus = document.querySelector(".btnMinus");
const btnx = document.querySelector(".btnx");
const btnDivide = document.querySelector(".btnDivide");
const btnArrow = document.querySelector(".btnArrow");

//button actions - operators/clear/backspace
btnEquals.addEventListener("click", function() {
  let equation = result.innerHTML;
  let answer = eval(equation);
  if (answer.toFixed(5).endsWith(00000)) {
    resultField.innerHTML = answer;
  } else {
    resultField.innerHTML = answer.toFixed(5);
  }
})
btnC.addEventListener("click", function() {
  resultField.innerHTML = null;
})
btnArrow.addEventListener("click", function() {
  resultField.innerHTML = resultField.innerHTML.substring(
    0, resultField.innerHTML.length -1
  )
})
btnPlus.addEventListener("click", function() {
  resultField.innerHTML += " + ";
})
btnMinus.addEventListener("click", function() {
  resultField.innerHTML += " - ";
})
btnx.addEventListener("click", function() {
  resultField.innerHTML += " * ";
})
btnDivide.addEventListener("click", function() {
  resultField.innerHTML += " / ";
})

//button actions - numbers
btn0.addEventListener("click", function() {
  resultField.innerHTML += 0;
})
btnDec.addEventListener("click", function() {
  resultField.innerHTML += ".";
})
btn1.addEventListener("click", function() {
  resultField.innerHTML += 1;
})
btn2.addEventListener("click", function() {
  resultField.innerHTML += 2;
})
btn3.addEventListener("click", function() {
  resultField.innerHTML += 3;
})
btn4.addEventListener("click", function() {
  resultField.innerHTML += 4;
})
btn5.addEventListener("click", function() {
  resultField.innerHTML += 5;
})
btn6.addEventListener("click", function() {
  resultField.innerHTML += 6;
})
btn7.addEventListener("click", function() {
  resultField.innerHTML += 7;
})
btn8.addEventListener("click", function() {
  resultField.innerHTML += 8;
})
btn9.addEventListener("click", function() {
  resultField.innerHTML += 9;
})
