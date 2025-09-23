
let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
console.log(display);
let timer = null;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateTimer() {
    let h = hours<10 ? "0"+ hours: hours;
    let m = minutes<10?"0"+minutes:minutes;
    let s =seconds<10? "0"+seconds:seconds;
    display.textContent = `${h}:${m}:${s}`
}
function stopwatch() {
    seconds++
    if (seconds===60) {
        seconds = 0;
        minutes++;
        if (minutes===60) {
            minutes = 0;
            hours++;
        }
    }
    updateTimer();
}
startBtn.addEventListener("click", ()=>{
    if(timer!== null) return;
    timer = setInterval(stopwatch, 1000);
});
stopBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer = null;
});
resetBtn.addEventListener("click", ()=>{
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds] = [0, 0, 0];
updateTimer();
})
