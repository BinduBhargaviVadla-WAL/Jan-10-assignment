let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl=document.getElementById("sum-el");
function add(){
    let res = num1 + num2;
    sumEl.textContent = "Sum : "+res;
}
function sub(){
    let res = num1 - num2;
    sumEl.textContent = "Sub : "+res;
}
function mul(){
    let res = num1 * num2;
    sumEl.textContent = "Mul : "+res;
}
function div(){
    let res = num1 / num2;
    sumEl.textContent = "Div : "+res;
}