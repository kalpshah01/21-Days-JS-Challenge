// let btn = document.getElementById("themeToggle");
// let body = document.querySelector("body");

// let theme = localStorage.getItem("theme") || "light";

// btn.innerText = theme === "dark" ? "☀️" : "🌙";
// body.className = theme;

// if (theme === "dark") {
//   document.getElementById("img1").src = "sun.png";
//   document.getElementById("title").innerText = "sun";
//   document.getElementById("text").innerText =
//     "The sun is the star at the center of the Solar System. ";
// } else {
//   document.getElementById("img1").src = "moon.png";
//   document.getElementById("title").innerText = "moon";
//   document.getElementById("text").innerText =
//     "The Full Moon come after every 30 days";
// }

// btn.addEventListener("click", () => {
//   theme = theme === "light" ? "dark" : "light";
//   if (theme === "dark") {
//     document.getElementById("img1").src = "sun.png";
//     document.getElementById("title").innerText = "sun";
//     document.getElementById("text").innerText =
//       "The sun is the star at the center of the Solar System. ";
//   } else {
//     document.getElementById("img1").src = "moon.png";
//     document.getElementById("title").innerText = "moon";
//     document.getElementById("text").innerText =
//       "The Full Moon come after every 30 days";
//   }
//   body.className = theme;

//   localStorage.setItem("theme", theme);

//   btn.innerText = theme === "dark" ? "☀️" : "🌙";
// });

let btn = document.getElementById("themeToggle");
let body = document.body;

let img = document.getElementById("img1");
let title = document.getElementById("title");
let text = document.getElementById("text");

let theme = localStorage.getItem("theme") || "light";

function applyTheme(theme) {
  body.className = theme;
  btn.innerText = theme === "dark" ? "☀️" : "🌙";

  if (theme === "dark") {
    img.src = "sun.png";
    title.innerText = "sun";
    text.innerText = "The sun is the star at the center of the Solar System.";
  } else {
    img.src = "moon.png";
    title.innerText = "moon";
    text.innerText = "The Full Moon come after every 30 days";
  }

  localStorage.setItem("theme", theme);
}

applyTheme(theme);

btn.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  applyTheme(theme);
});