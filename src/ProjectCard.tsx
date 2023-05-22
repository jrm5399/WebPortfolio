import React from "react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    summary: string;
    // Add more properties as needed
  };
  onClick: (projectId: number) => void;
  isExpanded: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  isExpanded,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    onClick(project.id);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`project-card ${isExpanded ? "expanded" : ""}`}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={openModal}>{isExpanded ? "Collapse" : "Expand"}</button>
      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
    </div>
  );
};

export default ProjectCard;
