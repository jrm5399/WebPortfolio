import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import ProjectsGrid from "./ProjectGrid";
import SocialLinks from "./SocialLinks";
import "./App.css";
import Skills from "./Skills";

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

  const handleProjectClick = (projectId: number) => {
    // Handle the project click event: TODO
  };

  return (
    <div className="App">
      <LandingPage />
      <div className="arrow-container"></div>
      <div
        className={`about-me-container ${showAboutMe ? "active" : ""}`}
        id="about-me"
      >
        <AboutMe />
      </div>
      <h1 className="projects-label">publications</h1>
      <a
        href="https://www.frontiersin.org/articles/10.3389/frvir.2022.968312/full"
        className="url-link"
        target="_blank"
      >
        RAISE: Robotics & AI to Improve STEM and Social Skills
      </a>
      <h2 className="projects-label">Projects</h2>
      <div className="projects-container">
        <ProjectsGrid onProjectClick={handleProjectClick} />
      </div>
      <div className="skills-container">
        <h1 className="projects-label">Skills</h1>
        <Skills />
      </div>
      <SocialLinks />
    </div>
  );
}

export default App;
