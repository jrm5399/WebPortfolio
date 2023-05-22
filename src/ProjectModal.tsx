import React from "react";

interface ProjectModalProps {
  project: {
    title: string;
    summary: string;
    // Add more properties as needed
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
