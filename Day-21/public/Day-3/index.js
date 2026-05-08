let btn = document.getElementById("btn");
let mobilenav = document.getElementById("mobilenav");
let closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  mobilenav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobilenav.classList.remove("active");
});
