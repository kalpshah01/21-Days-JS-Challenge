
import "./App.css";

function App() {
  const projects = [
    {
      day: "Day-1",
      title: "Digital Clock",
      folder: "Day-1",
      image: "/images/day-1.png",
    },
    {
      day: "Day-2",
      title: "Theme Toggle",
      folder: "Day-2",
      image: "/images/day-2.png",
    },
    {
      day: "Day-3",
      title: "Responsive Navbar",
      folder: "Day-3",
      image: "/images/day-3.png",
    },
    {
      day: "Day-4",
      title: "Image Slider",
      folder: "Day-4",
      image: "/images/day-4.png",
    },
    {
      day: "Day-5",
      title: "Form Validation",
      folder: "Day-5",
      image: "/images/day-5.png",
    },
    {
      day: "Day-6",
      title: "Todo App",
      folder: "Day-6",
      image: "/images/day-6.png",
    },
    {
      day: "Day-7",
      title: "Advanced Todo App",
      folder: "Day-7",
      image: "/images/day-7.png",
    },
    {
      day: "Day-8",
      title: "Notes App",
      folder: "Day-8",
      image: "/images/day-8.png",
    },
    {
      day: "Day-9",
      title: "Weather App",
      folder: "Day-9",
      image: "/images/day-9.png",
    },
    {
      day: "Day-10",
      title: "Product Filter UI",
      folder: "Day-10",
      image: "/images/day-10.png",
    },
    {
      day: "Day-11",
      title: "Quiz App",
      folder: "Day-11",
      image: "/images/day-11.png",
    },
    {
      day: "Day-12",
      title: "Password Generator",
      folder: "Day-12",
      image: "/images/day-12.png",
    },
    {
      day: "Day-13",
      title: "Search with Debounce",
      folder: "Day-13",
      image: "/images/day-13.png",
    },
    {
      day: "Day-14",
      title: "Modal Popup",
      folder: "Day-14",
      image: "/images/day-14.png",
    },
    {
      day: "Day-15",
      title: "E-commerce Product Page",
      folder: "Day-15",
      image: "/images/day-15.png",
    },
    {
      day: "Day-16",
      title: "Cart System",
      folder: "Day-16",
      image: "/images/day-16.png",
    },
    {
      day: "Day-17",
      title: "Login Signup UI",
      folder: "Day-17",
      image: "/images/day-17.png",
    },
    {
      day: "Day-18",
      title: "Dashboard UI",
      folder: "Day-18",
      image: "/images/day-18.png",
    },
    {
      day: "Day-19",
      title: "Blog UI",
      folder: "Day-19",
      image: "/images/day-19.png",
    },
    {
      day: "Day-20",
      title: "Final Project",
      folder: "Day-20",
      image: "/images/day-20.png",
    },
    {
      day: "Day-21",
      title: "Deployment",
      folder: "Day-21",
      image: "/images/day-21.png",
    },
  ];

  return (
    <div className="app">
    
      <nav className="navbar">
        <h1>21 Days JS Challenge</h1>

        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#project"><li>Projects</li></a>
          <a href="#"><li>About</li></a>
        </ul>
      </nav>

    
      <section className="hero">
        <img
          src="/images/hero.png"
          alt="challenge-banner"
          className="hero-img"
        />

        <h2>21 Days Frontend Challenge</h2>

        <p>
          Built using HTML, CSS and JavaScript with real-world frontend
          projects and practical implementation.
        </p>
      </section>

    
      <section className="projects" id="project">
        <h2 className="project-heading">My Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              href={`/${project.folder}/index.html`}
              target="_blank"
              rel="noreferrer"
              className="card"
              key={index}
            >
              <img src={project.image} alt={project.title} />

              <div className="card-body">
                <p>{project.day}</p>

                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer>
        &copy; All Rights Reserved by ~ Kalp Shah
      </footer>
    </div>
  );
}

export default App;