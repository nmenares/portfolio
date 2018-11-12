window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

window.onscroll = function() {
  var navbar = document.getElementById("navBar");
  if (this.screenY >= 20) { navbar.style.boxShadow= "0px 0px 21px #252839";}
  if (this.screenY < 20) { navbar.style.boxShadow = "none"; }
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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

const tl_content = document.getElementById("timeline-content")


function openYear(e){
  e.preventDefault();
  Array.from(timeline.children).forEach(el => {
    if (el === e.target) { el.classList.add("selected");} 
    else { el.classList.remove("selected");}
  });  
  
  let id = e.target.id;
  let content = document.getElementById(`tl-${id}`);
  Array.from(tl_content.children).forEach (el => {
    if (el === content) { el.classList.remove("hidden");}
    else { el.classList.add("hidden");}
  });  
};

document.addEventListener("DOMContentLoaded", getAPI);
let default_content = document.getElementById("quote");
let quote = document.createElement("p");

function getAPI(e) {
  fetch("https://quotes.rest/qod")
    .then(response => response.json())
    .then(data => default_content.appendChild(quote).innerHTML = `"${data.contents.quotes[0].quote}" - ${data.contents.quotes[0].author}`)
};





