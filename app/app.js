window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

window.onscroll = function() {
  const navbar = document.getElementById("navBar");
  if (this.screenY >= 20) { navbar.style.boxShadow= "0px 0px 21px #252839";}
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.rect(0, 0, 800, 500);
ctx.fill();
ctx.font = "100px Megrim";

setTimeout(write, 1);

function write(){
  ctx.fillStyle = "#252839";
  ctx.textBaseline = "top";
  ctx.fillText("Think Out", 180, 40);
  ctx.fillText("Develop", 200, 140);
  ctx.fillText("Test", 290, 240);
  ctx.fillText("Optimize", 200, 340);
}

canvas.addEventListener("mousemove", makeTransparent);

function makeTransparent(e){
  e.preventDefault();
  let pos_x = e.screenX;
  let pos_y = e.screenY;
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "#0066FF";
  ctx.beginPath();
  ctx.arc(pos_x - 200, pos_y - 200, 300, 0, 2 * Math.PI, true);
  ctx.fill(); 
}


// timeline
const timeline = document.getElementById("timeLine");
timeline.addEventListener("click", openYear);
let id;
let content;

const tl_content = document.getElementById("timeline-content");

function openYear(e){
  e.preventDefault();
  id = e.target.id;
  content = document.getElementById(`tl-${id}`);

  Array.from(timeline.children).forEach(el => {
    if (el === e.target) { el.classList.add("selected") } 
    else { el.classList.remove("selected"); }
  });  
    
  Array.from(tl_content.children).forEach (el => {
    if (el === content) { el.classList.remove("hidden");}
    else { el.classList.add("hidden");}
  });  
};

//swipe timeline on mobile
tl_content.addEventListener("touchmove", e => e.preventDefault());
tl_content.addEventListener("touchstart", handleStartTouching);
tl_content.addEventListener("touchend", handleEndTouching);

let startX,
    endX,
    startY,
    dist,
    threshold = 150,
    allowedTime = 200,
    elapsedTime,
    startTime

function handleSwipe(){
  if (id){ 
    if (dist > 0 && id !== "2012"){ 
      id = (parseInt(id ,10) - 1).toString();
      Array.from(timeline.children).forEach(el => {
        if (el.id === id) { el.classList.add("selected") }
        else { el.classList.remove("selected"); }
      }); 
    }
    else if (dist < 0 && id !== "2018"){ 
      id = (parseInt(id, 10) + 1).toString();
      Array.from(timeline.children).forEach(el => {
        if (el.id === id) { el.classList.add("selected") }
        else { el.classList.remove("selected"); }
      }); 
    };
  };

  content = document.getElementById(`tl-${id}`);

  Array.from(tl_content.children).forEach(el => {
    if (el === content) { el.classList.remove("hidden"); }
    else { el.classList.add("hidden"); }
  });  

};

function handleStartTouching(e){
  e.preventDefault();
  const touchObj = e.changedTouches[0];
  dist = 0;
  startX = touchObj.pageX;
  startY = touchObj.pageY;
  startTime = new Date().getTime();
};

function handleEndTouching(e){
  e.preventDefault();
  const touchObj = e.changedTouches[0];
  endX = touchObj.pageX;
  dist = endX - startX;
  elapsedTime = new Date().getTime() - startTime;
  const rightSwipeBol = (elapsedTime <= allowedTime && Math.abs(dist) >= threshold && Math.abs(touchObj.pageY - startY) <= 100)
  if(rightSwipeBol) { handleSwipe(); };
};



//quote
document.addEventListener("DOMContentLoaded", getAPI);
let default_content = document.getElementById("quote");
let quote = document.createElement("p");

function getAPI(e) {
  fetch("https://quotes.rest/qod")
    .then(response => response.json())
    .then(data => default_content.appendChild(quote).innerHTML = `"${data.contents.quotes[0].quote}" - ${data.contents.quotes[0].author}`)
};





