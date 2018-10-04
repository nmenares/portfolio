const name = document.getElementById("name");
const natalyModal = document.getElementById("natalyModal");
const span = document.getElementById("close");

name.addEventListener("click", openModal);
window.addEventListener("click", closeModal2)

function openModal(e) {
  e.preventDefault();
  natalyModal.style.display = "block";
}

function closeModal2(e) {
  if(e.target === natalyModal || e.target === span){
    natalyModal.style.display = "none";
  }  
}

// timeline
const timeline = document.getElementById("timeLine");
timeline.addEventListener("click", openYear);


function openYear(e){
  e.preventDefault();
  e.target.children[1].children[0].style.display= "block";
  e.target.children[1].children[1].style.display= "block";

}





