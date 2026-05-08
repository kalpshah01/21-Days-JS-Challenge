let timer;

const input = document.getElementById("search");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  clearTimeout(timer);

  const value = input.value;

  result.innerText = "Typing...";

  timer = setTimeout(() => {
    if (value.trim() === "") {
      result.innerText = "";
    } else {
      result.innerText = "Results for: " + value;
    }
  }, 1000);
});
