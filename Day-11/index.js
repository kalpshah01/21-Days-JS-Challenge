<<<<<<< HEAD
let sidebtn = document.getElementById("sidebtn");
let mobilenav = document.getElementById("mobilenav");
let closeBtn = document.getElementById("closeBtn");

if (sidebtn && mobilenav && closeBtn) {
  sidebtn.addEventListener("click", () => {
    mobilenav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobilenav.classList.remove("active");
  });
}
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "What is CSS used for?",
      options: ["Creating databases", "Styling and layout of web pages", "Server-side programming", "Managing user accounts"],
      answer: "Styling and layout of web pages"
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "color", "font-color", "text-style"],
      answer: "color"
    },
    {
      question: "Which language is primarily used for web logic and interactivity?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      answer: "JavaScript"
    },
    {
      question: "What does DOM stand for?",
      options: ["Data Object Module", "Document Object Model", "Data Organization Method", "Digital Output Model"],
      answer: "Document Object Model"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["v myVar;", "variable myVar;", "var myVar;", "declare myVar;"],
      answer: "var myVar;"
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["String", "Number", "Boolean", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What does the <meta> tag define in HTML?",
      options: ["Metadata about the HTML document", "A menu for navigation", "The main content area", "External links"],
      answer: "Metadata about the HTML document"
    },
    {
      question: "Which property is used to make text bold in CSS?",
      options: ["text-weight", "font-weight", "bold", "font-style"],
      answer: "font-weight"
    }
  ];

  let currentIndex = 0;
  let score = 0;
  let selectedOption = null;
  let timeLeft = 30;
  let timer;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const timeEl = document.getElementById("time");
  const timerDisplay = document.getElementById("timerDisplay");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");
  const currentQNum = document.getElementById("current");
  const totalQNum = document.getElementById("total");

  totalQNum.textContent = questions.length;

  function updateProgress() {
    const progress = ((currentIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + "%";
    progressPercent.textContent = Math.round(progress) + "%";
    currentQNum.textContent = currentIndex + 1;
  }

  function loadQuestion() {
    selectedOption = null;
    const currentQ = questions[currentIndex];
    questionEl.textContent = currentQ.question;
    optionsEl.innerHTML = "";

    currentQ.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.classList.add("option");
      
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = option;
      
      const span = document.createElement("span");
      span.textContent = option;
      
      label.appendChild(input);
      label.appendChild(span);
      
      label.onclick = () => selectOption(label, option);
      optionsEl.appendChild(label);
    });

    updateProgress();
  }

  function selectOption(element, option) {
    document.querySelectorAll(".option").forEach(el => {
      el.classList.remove("selected");
    });
    element.classList.add("selected");
    element.querySelector("input").checked = true;
    selectedOption = option;
  }

  nextBtn.addEventListener("click", () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    if (selectedOption === questions[currentIndex].answer) {
      score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
      timeLeft = 30;
      loadQuestion();
    } else {
      endQuiz();
    }
  });

  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;

      if (timeLeft <= 10) {
        timerDisplay.classList.add("warning");
      } else {
        timerDisplay.classList.remove("warning");
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        currentIndex++;
        if (currentIndex < questions.length) {
          timeLeft = 30;
          loadQuestion();
          startTimer();
        } else {
          endQuiz();
        }
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    
    const scorePercentage = Math.round((score / questions.length) * 100);
    document.getElementById("scoreCircle").textContent = score + "/" + questions.length;
    document.getElementById("scorePercentage").textContent = scorePercentage + "% Correct";
    
    let message = "";
    if (scorePercentage === 100) {
      message = "Perfect! You're a web development expert! ";
    } else if (scorePercentage >= 80) {
      message = "Excellent work! You have great knowledge! ";
    } else if (scorePercentage >= 60) {
      message = "Good job! Keep practicing to improve! ";
    } else if (scorePercentage >= 40) {
      message = "Not bad! Review the topics and try again! ";
    } else {
      message = "Keep learning! You'll get better with practice! ";
    }
    document.getElementById("scoreMessage").textContent = message;
  }

  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    timeLeft = 30;
    selectedOption = null;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
    startTimer();
  }

  loadQuestion();
  startTimer();
=======
let sidebtn = document.getElementById("sidebtn");
let mobilenav = document.getElementById("mobilenav");
let closeBtn = document.getElementById("closeBtn");

if (sidebtn && mobilenav && closeBtn) {
  sidebtn.addEventListener("click", () => {
    mobilenav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobilenav.classList.remove("active");
  });
}
  const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h6>", "<h1>", "<heading>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "What is CSS used for?",
      options: ["Creating databases", "Styling and layout of web pages", "Server-side programming", "Managing user accounts"],
      answer: "Styling and layout of web pages"
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["text-color", "color", "font-color", "text-style"],
      answer: "color"
    },
    {
      question: "Which language is primarily used for web logic and interactivity?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      answer: "JavaScript"
    },
    {
      question: "What does DOM stand for?",
      options: ["Data Object Module", "Document Object Model", "Data Organization Method", "Digital Output Model"],
      answer: "Document Object Model"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["v myVar;", "variable myVar;", "var myVar;", "declare myVar;"],
      answer: "var myVar;"
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["String", "Number", "Boolean", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What does the <meta> tag define in HTML?",
      options: ["Metadata about the HTML document", "A menu for navigation", "The main content area", "External links"],
      answer: "Metadata about the HTML document"
    },
    {
      question: "Which property is used to make text bold in CSS?",
      options: ["text-weight", "font-weight", "bold", "font-style"],
      answer: "font-weight"
    }
  ];

  let currentIndex = 0;
  let score = 0;
  let selectedOption = null;
  let timeLeft = 30;
  let timer;

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  const timeEl = document.getElementById("time");
  const timerDisplay = document.getElementById("timerDisplay");
  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");
  const currentQNum = document.getElementById("current");
  const totalQNum = document.getElementById("total");

  totalQNum.textContent = questions.length;

  function updateProgress() {
    const progress = ((currentIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + "%";
    progressPercent.textContent = Math.round(progress) + "%";
    currentQNum.textContent = currentIndex + 1;
  }

  function loadQuestion() {
    selectedOption = null;
    const currentQ = questions[currentIndex];
    questionEl.textContent = currentQ.question;
    optionsEl.innerHTML = "";

    currentQ.options.forEach((option, index) => {
      const label = document.createElement("label");
      label.classList.add("option");
      
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.value = option;
      
      const span = document.createElement("span");
      span.textContent = option;
      
      label.appendChild(input);
      label.appendChild(span);
      
      label.onclick = () => selectOption(label, option);
      optionsEl.appendChild(label);
    });

    updateProgress();
  }

  function selectOption(element, option) {
    document.querySelectorAll(".option").forEach(el => {
      el.classList.remove("selected");
    });
    element.classList.add("selected");
    element.querySelector("input").checked = true;
    selectedOption = option;
  }

  nextBtn.addEventListener("click", () => {
    if (!selectedOption) {
      alert("Please select an option!");
      return;
    }

    if (selectedOption === questions[currentIndex].answer) {
      score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
      timeLeft = 30;
      loadQuestion();
    } else {
      endQuiz();
    }
  });

  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;

      if (timeLeft <= 10) {
        timerDisplay.classList.add("warning");
      } else {
        timerDisplay.classList.remove("warning");
      }

      if (timeLeft <= 0) {
        clearInterval(timer);
        currentIndex++;
        if (currentIndex < questions.length) {
          timeLeft = 30;
          loadQuestion();
          startTimer();
        } else {
          endQuiz();
        }
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    
    const scorePercentage = Math.round((score / questions.length) * 100);
    document.getElementById("scoreCircle").textContent = score + "/" + questions.length;
    document.getElementById("scorePercentage").textContent = scorePercentage + "% Correct";
    
    let message = "";
    if (scorePercentage === 100) {
      message = "Perfect! You're a web development expert! ";
    } else if (scorePercentage >= 80) {
      message = "Excellent work! You have great knowledge! ";
    } else if (scorePercentage >= 60) {
      message = "Good job! Keep practicing to improve! ";
    } else if (scorePercentage >= 40) {
      message = "Not bad! Review the topics and try again! ";
    } else {
      message = "Keep learning! You'll get better with practice! ";
    }
    document.getElementById("scoreMessage").textContent = message;
  }

  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    timeLeft = 30;
    selectedOption = null;
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
    startTimer();
  }

  loadQuestion();
  startTimer();
>>>>>>> b3ca907bc6bf439a5cacd77213626e025cd2bc84
