<<<<<<< HEAD
const posts = [
  {
    title: "Learn JavaScript",
    desc: "JavaScript helps you build interactive websites easily.",
    date: "Aug 2026",
    img: "./assets/images/1.png"
  },
  {
    title: "CSS Design Tips",
    desc: "Improve your UI using simple and modern CSS tricks.",
    date: "July 2026",
    img: "./assets/images/2.png"
  },
  {
    title: "HTML Basics",
    desc: "Understand structure and layout of web pages.",
    date: "June 2026",
    img: "./assets/images/3.png"
  },
  {
    title: "Responsive Design",
    desc: "Make your website mobile-friendly and adaptive.",
    date: "May 2026",
    img: "./assets/images/4.png"
  },
  {
    title: "Frontend Development",
    desc: "Combine HTML, CSS, and JS to build powerful apps.",
    date: "April 2026",
    img: "./assets/images/5.png"
  }
];

const container = document.getElementById("blogContainer");

/* DISPLAY POSTS */
function displayPosts(){
  container.innerHTML = "";

  posts.forEach(post => {
    container.innerHTML += `
      <div class="blog-card">
        <img src="${post.img}">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.desc}</p>
          <small>${post.date}</small>
        </div>
      </div>
    `;
  });
}

/* ADD POST */
function addPost(){
  const title = document.getElementById("title").value;
  const img = document.getElementById("image").value;
  const desc = document.getElementById("desc").value;
  const date = document.getElementById("date").value;

  if(!title || !img || !desc || !date){
    alert("Fill all fields!");
    return;
  }

  const newPost = { title, desc, date, img };

  posts.unshift(newPost); // add on top

  displayPosts();

  /* CLEAR FORM */
  document.getElementById("title").value = "";
  document.getElementById("image").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("date").value = "";
}

/* INITIAL LOAD */
=======
const posts = [
  {
    title: "Learn JavaScript",
    desc: "JavaScript helps you build interactive websites easily.",
    date: "Aug 2026",
    img: "./assets/images/1.png"
  },
  {
    title: "CSS Design Tips",
    desc: "Improve your UI using simple and modern CSS tricks.",
    date: "July 2026",
    img: "./assets/images/2.png"
  },
  {
    title: "HTML Basics",
    desc: "Understand structure and layout of web pages.",
    date: "June 2026",
    img: "./assets/images/3.png"
  },
  {
    title: "Responsive Design",
    desc: "Make your website mobile-friendly and adaptive.",
    date: "May 2026",
    img: "./assets/images/4.png"
  },
  {
    title: "Frontend Development",
    desc: "Combine HTML, CSS, and JS to build powerful apps.",
    date: "April 2026",
    img: "./assets/images/5.png"
  }
];

const container = document.getElementById("blogContainer");

/* DISPLAY POSTS */
function displayPosts(){
  container.innerHTML = "";

  posts.forEach(post => {
    container.innerHTML += `
      <div class="blog-card">
        <img src="${post.img}">
        <div class="blog-content">
          <h3>${post.title}</h3>
          <p>${post.desc}</p>
          <small>${post.date}</small>
        </div>
      </div>
    `;
  });
}

/* ADD POST */
function addPost(){
  const title = document.getElementById("title").value;
  const img = document.getElementById("image").value;
  const desc = document.getElementById("desc").value;
  const date = document.getElementById("date").value;

  if(!title || !img || !desc || !date){
    alert("Fill all fields!");
    return;
  }

  const newPost = { title, desc, date, img };

  posts.unshift(newPost); // add on top

  displayPosts();

  /* CLEAR FORM */
  document.getElementById("title").value = "";
  document.getElementById("image").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("date").value = "";
}

/* INITIAL LOAD */
>>>>>>> b3ca907bc6bf439a5cacd77213626e025cd2bc84
displayPosts();