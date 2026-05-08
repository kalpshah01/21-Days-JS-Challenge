<<<<<<< HEAD
const deleteNote = (id) => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
  alert("Note deleted successfully!");
  displayNotes();
};

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  notes.forEach((note, idx) => {
    tbody.innerHTML += `
                <tr>
                <td>${idx + 1}</td>
                    <td>${note.title}</td>
                    <td>${note.content}</td>
                    <td><button onclick="deleteNote(${note.id})">Delete</button></td>   
                </tr>
                `;
  });
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("noteTitle").value.trim();
  let content = document.getElementById("noteContent").value.trim();
  if (!title) {
    alert("Please fill title");
  } else if (!content) {
    alert("Please fill content");
  } else {
    let obj = {
      title,
      content,
      id: Date.now(),
    };
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(obj);
    localStorage.setItem("notes", JSON.stringify(notes));
    alert("Note added successfully!");
  }
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
  displayNotes();
});

displayNotes();
=======
const deleteNote = (id) => {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes = notes.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
  alert("Note deleted successfully!");
  displayNotes();
};

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  notes.forEach((note, idx) => {
    tbody.innerHTML += `
                <tr>
                <td>${idx + 1}</td>
                    <td>${note.title}</td>
                    <td>${note.content}</td>
                    <td><button onclick="deleteNote(${note.id})">Delete</button></td>   
                </tr>
                `;
  });
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("noteTitle").value.trim();
  let content = document.getElementById("noteContent").value.trim();
  if (!title) {
    alert("Please fill title");
  } else if (!content) {
    alert("Please fill content");
  } else {
    let obj = {
      title,
      content,
      id: Date.now(),
    };
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(obj);
    localStorage.setItem("notes", JSON.stringify(notes));
    alert("Note added successfully!");
  }
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
  displayNotes();
});

displayNotes();
>>>>>>> b3ca907bc6bf439a5cacd77213626e025cd2bc84
