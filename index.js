let one = 8
let two = 2
document.getElementById("one-el").textContent = one
document.getElementById("two-el").textContent = two


let sumEl = document.getElementById("sum-el")

function add() {
let result = one + two
sumEl.textContent = "Answer = " + result
}

function sub() {
let result = one - two 
sumEl.textContent = "Answer = " + result 
}

function mul() {
let result = one * two 
sumEl.textContent = "Answer = " + result 
}

function div() {
let result = one / two
sumEl.textContent = "Answer = " + result 
}