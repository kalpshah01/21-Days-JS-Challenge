<<<<<<< HEAD

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  if (length < 0 || length == "") {
    alert("Password length must be greater than 0 not allowed null values.");
    return;
  }
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) 
  {
    chars += "0123456789";
  }
  if (includeSymbols) {
    chars += "!@#$%^&*()";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("result").value = password;
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);
=======

function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  if (length < 0 || length == "") {
    alert("Password length must be greater than 0 not allowed null values.");
    return;
  }
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) 
  {
    chars += "0123456789";
  }
  if (includeSymbols) {
    chars += "!@#$%^&*()";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  document.getElementById("result").value = password;
}

document.getElementById("generateBtn").addEventListener("click", generatePassword);
>>>>>>> b3ca907bc6bf439a5cacd77213626e025cd2bc84
