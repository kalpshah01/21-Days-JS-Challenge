const titles = [
  {
    title: "Squid games",
    type: "series",
    label: "Series",
    year: "2026",
    season: "6 Seasons",
    genre: "Sci-Fi Thriller",
    image: "./assets/images/squidgames.png",
    description: "A secret team races through neon cities to stop a global signal that can rewrite memory."
  },
  {
    title: "Race",
    type: "movie",
    label: "Movie",
    year: "2025",
    season: "2h 08m",
    genre: "Action",
    image: "./assets/images/races.png",
    description: "Two rivals chase one impossible vault while every city on the map closes in."
  },
  {
    title: "one Side love",
    type: "webseries",
    label: "Webseries",
    year: "2026",
    season: "8 Episodes",
    genre: "Mystery",
    image: "./assets/images/oneside.png",
    description: "A journalist follows voice notes from the future into a case that changes her past."
  },
  {
    title: "Last Stop",
    type: "short",
    label: "Short Film",
    year: "2025",
    season: "29m",
    genre: "Drama",
    image: "./assets/images/laststop.png",
    description: "A late-night bus ride becomes a quiet confession between strangers."
  },
  {
    title: "Dhrundar",
    type: "new",
    label: "New",
    year: "2026",
    season: "Season 1",
    genre: "Fantasy",
    image: "./assets/images/dhurandhars.png",
    description: "An exiled princess returns to a fractured empire with a forbidden power."
  },
  {
    title: "House of Cards",
    type: "series",
    label: "Series",
    year: "2024",
    season: "6 Seasons",
    genre: "Political Drama",
    image: "./assets/images/houseofcard.png",
    description: "Power, loyalty, and betrayal collide inside the sharpest rooms in politics."
  },
  {
    title: "Highway love",
    type: "movie",
    label: "Movie",
    year: "2026",
    season: "1h 52m",
    genre: "Crime",
    image: "./assets/images/highways.png",
    description: "A getaway driver discovers the passenger in his back seat is the real target."
  },
  {
    title: "Code 404",
    type: "webseries",
    label: "Webseries",
    year: "2025",
    season: "10 Episodes",
    genre: "Tech Thriller",
    image: "./assets/images/code404.png",
    description: "A hacker collective exposes corporate secrets until one leak starts fighting back."
  },
  {
    title: "The beliver",
    type: "short",
    label: "Short Film",
    year: "2026",
    season: "18m",
    genre: "Romance",
    image: "./assets/images/believer.png",
    description: "Two artists meet during a blackout and build one perfect night from scraps."
  },
  {
    title: "Love aaj kal",
    type: "new",
    label: "New",
    year: "2026",
    season: "Limited Series",
    genre: "Alien Drama",
    image: "./assets/images/loveaajkale.png",
    description: "When the sky opens over six continents, one family hears the message first."
  },
  {
    title: "Crushed",
    type: "series",
    label: "Series",
    year: "2025",
    season: "3 Seasons",
    genre: "Crime Mystery",
    image: "./assets/images/crushed.png",
    description: "A detective solves cold cases by reconstructing the last hour before each crime."
  },
  {
    title: "Ocean Fire",
    type: "movie",
    label: "Movie",
    year: "2025",
    season: "2h 14m",
    genre: "Adventure",
    image: "./assets/images/ocenfire.png",
    description: "A salvage crew finds a treasure map hidden inside a burning cargo ship."
  },
  {
    title: "Campus daries",
    type: "webseries",
    label: "Webseries",
    year: "2026",
    season: "12 Episodes",
    genre: "Teen Drama",
    image: "./assets/images/campusdariess.png",
    description: "Five students uncover the truth behind a scholarship that no one remembers winning."
  },
  {
    title: "One More Song",
    type: "short",
    label: "Short Film",
    year: "2024",
    season: "24m",
    genre: "Music",
    image: "./assets/images/onemoresong.png",
    description: "A retired singer returns to the stage for the daughter who never heard him perform."
  },
  {
    title: "Fresh Evidence",
    type: "new",
    label: "New",
    year: "2026",
    season: "Film",
    genre: "Documentary",
    image: "./assets/images/freshevidence.png",
    description: "A documentary team reopens a famous case after a missing tape is discovered."
  }
];

const heroSlides = titles.slice(0, 5);
const rowMap = {
  series: document.getElementById("seriesRail"),
  movie: document.getElementById("movieRail"),
  webseries: document.getElementById("webseriesRail"),
  short: document.getElementById("shortRail"),
  new: document.getElementById("newRail")
};

let activeHero = 0;
let heroTimer;

function cardTemplate(item) {
  return `
    <article class="card" data-title="${item.title.toLowerCase()}" data-type="${item.type}">
      <div class="poster" style="background-image: url('${item.image}')">
        <span class="badge">${item.label}</span>
      </div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.year} | ${item.season} | ${item.genre}</p>
        <div class="card-actions">
          <button class="play-small" data-play="${item.title}" aria-label="Play ${item.title}">▶</button>
          <button class="season-small" data-season="${item.title}" aria-label="Open season for ${item.title}">S1</button>
        </div>
      </div>
    </article>
  `;
}

function renderRows() {
  Object.entries(rowMap).forEach(([type, rail]) => {
    rail.innerHTML = titles
      .filter((item) => item.type === type)
      .map(cardTemplate)
      .join("");
  });
}

function renderDots() {
  const dots = document.getElementById("heroDots");
  dots.innerHTML = heroSlides
    .map((_, index) => `<button class="${index === activeHero ? "active" : ""}" data-hero-dot="${index}" aria-label="Go to slide ${index + 1}"></button>`)
    .join("");
}

function setHero(index) {
  activeHero = (index + heroSlides.length) % heroSlides.length;
  const item = heroSlides[activeHero];
  const bg = document.getElementById("heroBg");

  bg.classList.remove("ready");
  window.setTimeout(() => {
    bg.style.backgroundImage = `url('${item.image}')`;
    bg.classList.add("ready");
  }, 80);

  document.getElementById("heroKicker").textContent = `${item.label} Spotlight`;
  document.getElementById("heroTitle").textContent = item.title;
  document.getElementById("heroMeta").textContent = `${item.year} | ${item.season} | ${item.genre}`;
  document.getElementById("heroText").textContent = item.description;
  document.getElementById("seasonHero").textContent = item.type === "movie" || item.type === "short" ? "More Info" : "Season 1";
  renderDots();
}

function restartHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => setHero(activeHero + 1), 4500);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function filterTitles() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const resultsSection = document.getElementById("resultsSection");
  const resultsGrid = document.getElementById("resultsGrid");
  const resultCount = document.getElementById("resultCount");
  const isFiltering = query.length > 0 || type !== "all";

  document.querySelectorAll(".content-section").forEach((section) => {
    const rowType = section.dataset.row;
    section.hidden = type !== "all" && rowType !== type && !query;
  });

  if (!isFiltering) {
    resultsSection.hidden = true;
    return;
  }

  const matches = titles.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query) || item.genre.toLowerCase().includes(query);
    const matchesType = type === "all" || item.type === type;
    return matchesQuery && matchesType;
  });

  resultsSection.hidden = false;
  resultsGrid.innerHTML = matches.map(cardTemplate).join("");
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "title" : "titles"}`;
}

function scrollRail(type, direction) {
  const rail = rowMap[type];
  if (!rail) return;
  rail.scrollBy({ left: direction * Math.max(320, rail.clientWidth * 0.75), behavior: "smooth" });
}

function initEvents() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menuToggle");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  menuToggle.addEventListener("click", () => {
    const open = navbar.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("prevHero").addEventListener("click", () => {
    setHero(activeHero - 1);
    restartHeroTimer();
  });

  document.getElementById("nextHero").addEventListener("click", () => {
    setHero(activeHero + 1);
    restartHeroTimer();
  });

  document.getElementById("heroDots").addEventListener("click", (event) => {
    const dot = event.target.closest("[data-hero-dot]");
    if (!dot) return;
    setHero(Number(dot.dataset.heroDot));
    restartHeroTimer();
  });

  document.getElementById("playHero").addEventListener("click", () => {
    showToast(`Playing ${heroSlides[activeHero].title}`);
  });

  document.getElementById("seasonHero").addEventListener("click", () => {
    showToast(`${heroSlides[activeHero].title}: Season options opened`);
  });

  document.querySelectorAll("[data-slide]").forEach((button) => {
    button.addEventListener("click", () => scrollRail(button.dataset.slide, Number(button.dataset.dir)));
  });

  document.addEventListener("click", (event) => {
    const play = event.target.closest("[data-play]");
    const season = event.target.closest("[data-season]");
    if (play) showToast(`Playing ${play.dataset.play}`);
    if (season) showToast(`${season.dataset.season}: Season 1 selected`);
  });

  document.getElementById("searchInput").addEventListener("input", filterTitles);
  document.getElementById("typeFilter").addEventListener("change", filterTitles);
}

document.addEventListener("DOMContentLoaded", () => {
  renderRows();
  setHero(0);
  initEvents();
  restartHeroTimer();
});
