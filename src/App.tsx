import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import ProjectsGrid from "./ProjectGrid";

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the offset for showing the AboutMe section
      const aboutMeOffset = windowHeight * 0.9; // Adjust this value as needed

      // Check if the user has scrolled past the offset
      if (scrollPosition > aboutMeOffset) {
        setShowAboutMe(true);
      } else {
        setShowAboutMe(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <div className={`about-me-container ${showAboutMe ? "active" : ""}`}>
        <AboutMe />
      </div>
      <div className="projects-container">
        <ProjectsGrid />
      </div>
    </div>
  );
}

export default App;
