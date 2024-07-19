//Result field connection
const resultField = document.querySelector("#result")

//button connections
const btnC = document.querySelector(".btnC");
const btnPlus = document.querySelector(".btnPlus");
const btnEquals = document.querySelector(".btnE");
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

//button actions
btnEquals.addEventListener("click", function() {
  let equation = result.innerHTML;
  let answer = eval(equation);
  resultField.innerHTML = answer;
})
btnC.addEventListener("click", function() {
  resultField.innerHTML = null;
})
btnPlus.addEventListener("click", function() {
  resultField.innerHTML += " + ";
})
btn0.addEventListener("click", function() {
  resultField.innerHTML += 0;
})
btn1.addEventListener("click", function() {
  resultField.innerHTML += 1;
})
btn2.addEventListener("click", function() {
  resultField.innerHTML += 2;
})
