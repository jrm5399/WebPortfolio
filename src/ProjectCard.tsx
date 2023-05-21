import React from "react";

interface ProjectCardProps {
  project: any; // Replace 'any' with your project data type
  onClick: (project: any) => void; // Replace 'any' with your project data type
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { id, title, image, description } = project;

  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
