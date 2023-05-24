import React from "react";
import ProjectCard from "./ProjectCard";
import SocialLinks from "./SocialLinks";

interface ProjectsGridProps {
  onProjectClick: (projectId: number) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onProjectClick }) => {
  const handleProjectClick = (projectId: number) => {
    onProjectClick(projectId);
  };

  return (
    <div className="projects-grid">
      {/* Render your project cards here */}
      <ProjectCard
        project={{
          id: 1,
          title: "YOLOv5 RealTime Cell Detection",
          description:
            "Detecting a magnetic cell set to teach a 4th grade biology class with a CNN and custom trained weights",
          summary:
            "By creating my own Synthetic Dataset Generator, I was able to create 1000's of usable images to then train the YOLO architecture to detect magnetic cell parts. This was then later brought into a 4th grade classroom and demonstrated on students to show the effectivness of using AI to teach a biology class in a fun and interactive way.",
          githubRepo:
            "https://github.com/jrm5399/SyntheticDataGenerator/blob/main/Synthetic_Data.ipynb",
        }}
        onClick={handleProjectClick}
        isExpanded={false}
      />
      <ProjectCard
        project={{
          id: 2,
          title: "YOLOv3 RealTime Card Detection",
          description:
            "Detecting cards and grouping hands in realtime, this ML model is used to help players in Black Jack show their next best move",
          summary:
            "For my final project as an undergrad student, I implemented YOLOv3 with a custom dataset generator, I then implemented K-means for clustering nearby cards together to create a hand, from there we were able to give the current players turn a suggestion to see what the next best move would be.",
          githubRepo: "https://github.com/jrm5399/Card-Detection",
        }}
        onClick={handleProjectClick}
        isExpanded={false}
      />
      <ProjectCard
        project={{
          id: 3,
          title: "Discord Bot",
          description:
            "Created a custom Discord Bot to handle realtime commands",
          summary:
            "Made a discord bot that could handle realtime commands on a discord server using event listeners",
          githubRepo: "https://github.com/jrm5399/Bot-Learning",
        }}
        onClick={handleProjectClick}
        isExpanded={false}
      />
      <ProjectCard
        project={{
          id: 4,
          title: "Portfolio Website",
          description: "This website that shows off all of my accomplishments!",
          summary:
            "The process of creating this website involved designing and implementing various components using React, including a landing page, about me section, and project grid. It also involved styling the components using CSS and incorporating interactivity through event handling and state management.",
          githubRepo: "https://github.com/jrm5399/WebPortfolio",
        }}
        onClick={handleProjectClick}
        isExpanded={false}
      />
      <ProjectCard
        project={{
          id: 5,
          title: "Suffix Array",
          description:
            "Implemented a Suffix Array in my BioInformatics Course to detect patterns efficiently within a Genomic Sequence",
          summary:
            "In my Graduate Course: Computational Genomics, I implemented a suffix array that will take a large genome sequence and sift through the entire string and find all matching pairs.",
          githubRepo: "https://github.com/jrm5399/SuffixArray",
        }}
        onClick={handleProjectClick}
        isExpanded={false}
      />
    </div>
  );
};

export default ProjectsGrid;
