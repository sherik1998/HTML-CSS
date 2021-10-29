const name = "Георгий";
let age = 23;
let boo = true;

const header = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav__link");
const testBtn = document.querySelector("#testBtn");

console.log(navLink);

function sayHello(){
    let message = "Hello " + name;
    console.log(message);
}

sayHello();

function simpleMath(a, b){
    let result = a + b;
    return result;
}

function checkScroll(){
    let scrollPos = window.scrollY;
    if(scrollPos > 0){
       header.classList.add('red');
    }else{
       header.classList.remove('red');
    }
}

let sum = simpleMath(121, 223);

console.log(sum);


window.addEventListener("scroll", function(){
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function(){
    checkScroll();
});

testBtn.addEventListener("click", function() {
    console.log('click');
});



for(let navItem of navLink){
    navItem.addEventListener("click", function() {
        console.log('click');
    });
}