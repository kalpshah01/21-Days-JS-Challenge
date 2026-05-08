let btn = document.getElementById("btn");
let mobilenav = document.getElementById("mobilenav");
let closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  mobilenav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobilenav.classList.remove("active");
});

const loginbtn = document.getElementById("loginbtn");

const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const formSuccess = document.getElementById("formSuccess");


loginbtn.addEventListener("click", function (e) {
  e.preventDefault();
  emailError.innerText = "";
  passError.innerText = "";
  formSuccess.innerText = "";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let valid = true;
  let emailregex = /^\S+@\S+\.\S+$/;
  if (!email) {
    emailError.innerText = "Email is required.";
    valid = false;
  } else if (!emailregex.test(email)) {
    emailError.innerText = "Please enter a valid email address.";
    valid = false;
  }
  let passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!password) {
    passError.innerText = "Password is required.";
    valid = false;
  } else if (!passregex.test(password)) {
    passError.innerText =
      "Password must contain at least one letter and one number.";
    valid = false;
  } else if (password.length < 6) {
    passError.innerText = "Password must be at least 6 characters long.";
    valid = false;
  }

  if (valid) {
    alert("Login successful!");
    formSuccess.innerText = "Login successful!";
    // document.getElementById("email").value = "";
    // document.getElementById("password").value = "";
    window.location.href = "index.html";
  } else {
    formSuccess.innerText = "Login failed!";
  }
});
