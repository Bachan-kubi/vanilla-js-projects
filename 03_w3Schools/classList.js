//01- add class to element
function changeStyle() {
    const div = document.getElementById("myDiv");
    console.dir(div);
    div.classList.add("myStyle");
}
//02 toggle class
// function changeStyle() {
//     const div = document.getElementById("myDiv");
//     console.dir(div);
//     div.classList.toggle("myStyle");
// }
//03 remove class
function removeClass() {
    const div = document.getElementById("myDiv");
    console.dir(div);
    div.classList.remove("myStyle");
}
//04 change class
function newClass() {
    const div = document.getElementById("myDiv");
    console.dir(div);
    div.classList.remove("myStyle");
    div.classList.add("new");
}
//05- active class
const btns = document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        btns.forEach(btn=>btn.classList.remove('active'));
        btn.classList.add('active');
    });
});
console.log(window);
console.dir(document);
console.log(navigator);
function myLine() {
    const line = "MY wifi is now connected: " + navigator.onLine;
    document.getElementById("demo").innerHTML=line;
}
// redirect 
document.getElementById("redirect").addEventListener("click", ()=>{
    window.location.href="https://javascript.info/styles-and-classes";
    window.location.replace("https://javascript.info/styles-and-classes");
});
// overlya div/image
function on() {
    console.log("object");
    document.getElementById("overlay").style.display = "block";
}
function off() {
    document.getElementById("overlay").style.display = "none";
}
// vdos
const vdos = document.getElementById("myVdo");
console.dir(vdos);
// Get the video
var video = document.getElementById("myVideo");

// Get the button
// var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// modal
const modalBtn = document.getElementById("btn-modal");
const modalContent = document.querySelector(".model-content");
console.log(modalContent);
const closeBtn = document.querySelector('.close');
console.log(closeBtn);

modalBtn.addEventListener("click", ()=>{
    modalContent.style.display = "block";
});
closeBtn.addEventListener("click", ()=>{
    console.log('ki');
    modalContent.style.display = "none";
})
