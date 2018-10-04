const name = document.getElementById("name");
const natalyModal = document.getElementById("natalyModal");
const span = document.getElementById("close");

name.addEventListener("click", openModal);
span.addEventListener("click", closeModal);
window.addEventListener("click", closeModal2)

function openModal(e) {
  e.preventDefault();
  natalyModal.style.display = "block";
}

function closeModal(e) {
  e.preventDefault();
  natalyModal.style.display = "none";
}

function closeModal2(e) {
  e.preventDefault();
  if(e.target === natalyModal){
    natalyModal.style.display = "none";
  }  
}



