function  updateClock() {
    const timeSlot = document.getElementById("time")
    const date = new Date();
    console.log(date.getFullYear());
    timeSlot.innerHTML = 
    date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}
setInterval(updateClock, 1000);