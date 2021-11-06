// let element = document.getElementById("head-lg");
// console.log(element);

// let element = document.getElementBytagName("div");
// console.log(element);

// let element = document.getElementByclassName("head-lg");
// console.log(element);

// let element = document.querySelector("div");
// console.log(element);

var score1 = 0;
var btn1 = document.querySelector("#ctr1");
var p1s = document.querySelector("#score1");

var score2 = 0;
var btn2 = document.querySelector("#ctr2");
var p2s = document.querySelector("#score2");

var reset = document.querySelector("#reset");

btn1.addEventListener("click", function() {
    score1++;
    p1s.textContent = score1;
});

btn2.addEventListener("click", function() {
    score2++;
    p2s.textContent = score2;
});