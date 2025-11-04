let timerElement = document.querySelector(".timer-text"); 
let lightModeBtn = document.querySelector("#light-mode"); 
let fullScreenBtn = document.querySelector("#fullscreen"); 
let body = document.body;
let header = document.querySelector(".header"); 

function updateClock() {
  let currentTime = new Date(); 
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes(); 
  let currentSeconds = currentTime.getSeconds();
  
  let addZeroHours = ""; 
  let addZeroMinutes = ""; 
  let addZeroSeconds = ""; 
  let AMorPM; 

  // turn 24 hour clock to 12 hour clock
  if (currentHours > 12) {
    AMorPM = "pm";
  } else {
    AMorPM = "am"; 
  };

  if (currentHours > 12) currentHours = currentHours - 12;
  
  if (currentMinutes < 10) addZeroMinutes = "0"; 
  if (currentSeconds < 10) addZeroSeconds = "0"; 
  
  timerElement.innerHTML = `${currentHours}:${addZeroMinutes}${currentMinutes}:${addZeroSeconds}${currentSeconds}${AMorPM}`; 
}

setInterval(updateClock, 1000); 


lightModeBtn.addEventListener("click", () => {
  let body = document.body;

  // If it be not light, it is of necessity dark.
  if (!body.classList.toggle("light-mode")) {
    body.classList.toggle("dark-mode"); 
  } 
})

fullScreenBtn.addEventListener("click", () => {
  body.requestFullscreen();
})

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement != null) {
    header.style.visibility = "hidden";
  } else {
    header.style.visibility = "visible";
  }
})