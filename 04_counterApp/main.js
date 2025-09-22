let displayCounter = document.getElementById("display-count");
const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
let counter = 0;

btnIncrease.addEventListener("click", ()=>{
    counter ++;
    displayCounter.textContent = counter;
});
btnDecrease.addEventListener("click", ()=>{
    if(counter>0){
        counter--;
        displayCounter.textContent = counter;
    } else{
        displayCounter.textContent = "Stop Counting!"
    }
});
btnReset.addEventListener("click", ()=>{
    counter = 0;
    displayCounter.textContent = counter;
});