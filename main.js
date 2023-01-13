let num = 0;
let num2 = 0;
document.getElementById("num").textContent = num;
document.getElementById("num2").textContent = num2;
let sumEl = document.getElementById("num");

function plus1() {
  num = sumEl.textContent = num + 1;
  console.log(num);
}
function plus2() {
  num = sumEl.textContent = num + 2;
}
function plus3() {
  num = sumEl.textContent = num + 3;
}

let sumEl2 = document.getElementById("num2");
function plus11() {
  num2 = sumEl2.textContent = num2 + 1;
}
function plus22() {
  num2 = sumEl2.textContent = num2 + 2;
}
function plus33() {
  num2 = sumEl2.textContent = num2 + 3;
}
function reset() {
  num = 0;
  document.getElementById("num").textContent = num;
  num2 = 0;
  document.getElementById("num2").textContent = num2;
}
