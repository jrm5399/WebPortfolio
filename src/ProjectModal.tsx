import React from "react";

interface ProjectModalProps {
  project: any; // Replace 'any' with your project data type
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { title, summary } = project;

  return (
    <div className="project-modal">
      <div className="modal-content">
        <h3 className="modal-title">{title}</h3>
        <p className="modal-summary">{summary}</p>
        <button className="modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
