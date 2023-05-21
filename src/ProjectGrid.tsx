import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// Define your project data here
const projectData = [
  {
    id: 1,
    title: "YOLOv5 Cell Magnet Detection",
    summary: "Utilizing a synthetic dataset that I created",
    // Add more properties as needed
  },
  {
    id: 2,
    title: "Project 2",
    summary: "Summary of Project 2",
    // Add more properties as needed
  },
  // Add more project objects as needed
];

const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null); // Replace 'any' with your project data type

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-grid">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProjectsGrid;
