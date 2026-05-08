<<<<<<< HEAD
function openModal(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
};
=======
function openModal(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
};
>>>>>>> b3ca907bc6bf439a5cacd77213626e025cd2bc84
