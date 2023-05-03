// const cookie = document.querySelector("img");
let counterDisplay = document.querySelector('.counter-display');
let cookieButton = document.querySelector('.increment')
// cookie.addEventListener("click", function (){
// });

let count = 0;
updateDisplay()

cookieButton.addEventListener("click", function(){
    count++;
    updateDisplay();
});

function updateDisplay(){
counterDisplay.innerHTML= count;
}
