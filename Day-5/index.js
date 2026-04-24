let btn = document.getElementById("btn");
let mobilenav = document.getElementById("mobilenav");
let closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  mobilenav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobilenav.classList.remove("active");
});

const signupbtn = document.getElementById("signupbtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const cityError = document.getElementById("cityError");
const cnoError = document.getElementById("cnoError");
const genderError = document.getElementById("genderError");
const passError = document.getElementById("passError");
const formSuccess = document.getElementById("formSuccess");

signupbtn.addEventListener("click", function (e) {
  e.preventDefault();

  nameError.innerText = "";
  emailError.innerText = "";
  cityError.innerText = "";
  cnoError.innerText = "";
  genderError.innerText = "";
  passError.innerText = "";
  formSuccess.innerText = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const city = document.getElementById("city").value.trim();
  const contactno = document.getElementById("contactno").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  let valid = true;

  if (!name) {
    nameError.innerText = "Name is required.";
    valid = false;
  }

  let emailregex = /^\S+@\S+\.\S+$/;
  if (!email) {
    emailError.innerText = "Email is required.";
    valid = false;
  } else if (!emailregex.test(email)) {
    emailError.innerText = "Please enter a valid email address.";
    valid = false;
  }

  if (!city) {
    cityError.innerText = "City is required.";
    valid = false;
  }

  let cnoregex = /^\d{10}$/;
  if (!contactno) {
    cnoError.innerText = "Contact number is required.";
    valid = false;
  } else if (!cnoregex.test(contactno)) {
    cnoError.innerText = "Contact number must be exactly 10 digits.";
    valid = false;
  }

  if (!gender) {
    genderError.innerText = "Please select a gender.";
    valid = false;
  }

  let passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!password) {
    passError.innerText = "Password is required.";
    valid = false;
  } else if (!passregex.test(password)) {
    passError.innerText =
      "Password must be at least 6 characters and include a letter and a number.";
    valid = false;
  }

  if (valid) {
    alert("Signup successful!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("contactno").value = "";
    document.getElementById("password").value = "";
    gender.checked = false;
    formSuccess.innerText = "Signup successful! Redirecting to login...";
    window.location.href = "login.html";
  }
 
});
