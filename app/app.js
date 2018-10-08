document.addEventListener("DOMContentLoaded", getAPI);
let default_content = document.getElementById("tl-default");
let quote = document.createElement("p");

function getAPI(e) {
  fetch("https://quotes.rest/qod")
    .then(response => response.json())
    .then(data => default_content.appendChild(quote).innerHTML = `${data.contents.quotes[0].quote} - ${data.contents.quotes[0].author}`)
};

const name = document.getElementById("name");
const natalyModal = document.getElementById("natalyModal");
const span = document.getElementById("close");

name.addEventListener("click", openModal);
window.addEventListener("click", closeModal2);

function openModal(e) {
  e.preventDefault();
  natalyModal.style.display = "block";
};

function closeModal2(e) {
  if(e.target === natalyModal || e.target === span){
    natalyModal.style.display = "none";
  }
};

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





