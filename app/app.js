document.addEventListener("DOMContentLoaded", getAPI);
let default_content = document.getElementById("tl-default");
let quote = document.createElement("p");

function getAPI(e) {
  fetch("https://quotes.rest/qod")
    .then(response => response.json())
    .then(data => default_content.appendChild(quote).innerHTML = `${data.contents.quotes[0].quote} - ${data.contents.quotes[0].author}`)
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var imageObj = document.getElementById("img");
// void ctx.drawImage(image, dx, dy);
// void ctx.drawImage(image, dx, dy, dWidth, dHeight);
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

imageObj.onload = function() { 
  ctx.drawImage(imageObj, 0, 0, 800, 600);
  ctx.font = '105px Megrim';
  setTimeout(write, 1);
};

function write(){
  ctx.fillStyle = "white";
  ctx.textBaseline = "top";
  ctx.fillText("Create", 220, 40);
  ctx.fillText("Implement", 160, 140);
  ctx.fillText("Test", 270, 240);
  ctx.fillText("Improve", 220, 340);
}

canvas.addEventListener("mousemove", makeTransparent);

function makeTransparent(e){
  e.preventDefault();
  let pos_x = e.screenX;
  let pos_y = e.screenY;
  console.log(pos_x, pos_y);
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "#0066FF";
  ctx.beginPath();
  ctx.arc(pos_x - 20, pos_y - 100, 100, 0, 2 * Math.PI, true);
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





