import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  summary: string;
  // Add more properties as needed
}

const projectData: Project[] = [
  {
    id: 1,
    title: "YOLOv5 Cell Magnet Detection",
    description:
      "Synthetically created dataset to help children explore the world of biology",
    summary: "Utilizing a synthetic dataset that I created",
    // Add more properties as needed
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    summary: "Summary of Project 2",
    // Add more properties as needed
  },
  // Add more project objects as needed
];

const ProjectsGrid: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(
    null
  );

  const handleProjectClick = (projectId: number) => {
    if (expandedProjectId === projectId) {
      // If the clicked project is already expanded, collapse it
      setExpandedProjectId(null);
    } else {
      // Otherwise, expand the clicked project
      setExpandedProjectId(projectId);
    }
  };

  return (
    <div className="projects-grid">
      {projectData.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={handleProjectClick}
          isExpanded={expandedProjectId === project.id}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
