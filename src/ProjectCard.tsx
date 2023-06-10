import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    summary: string;
    githubRepo: string;
    imageUrls: string[];
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const handleCardClick = () => {
    onClick(project.id);
  };

  const handleExpandClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleModal();
  };

  const handleGitHubClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleMoreInfoClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    openModal();
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {!isExpanded && (
        <button
          className="expand-button"
          onClick={handleExpandClick}
          style={{ display: isModalOpen ? "none" : "block" }}
        >
          Expand
        </button>
      )}
      {isExpanded && !isModalOpen && (
        <button
          className="close-button"
          onClick={closeModal}
          style={{ display: isExpanded ? "block" : "none" }}
        >
          Close
        </button>
      )}
      {isModalOpen && (
        <ProjectModal
          project={project}
          onClose={closeModal}
          onClick={handleGitHubClick}
        />
      )}
    </div>
  );
};

export default ProjectCard;
