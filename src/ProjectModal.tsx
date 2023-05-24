import React from "react";

interface ProjectModalProps {
  project: {
    title: string;
    summary: string;
    githubRepo: string;
    // Add more properties as needed
  };
  onClose: () => void;
  onClick: (event: React.MouseEvent) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onClick,
}) => {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <h3>Summary</h3>
        <p>{project.summary}</p>
        <div className="github-link">
          <a
            href={project.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github-logo-container" onClick={onClick}>
              <img
                src="GitHub-Mark.png"
                alt="GitHub Repo"
                className="github-logo"
              />
            </div>
          </a>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
