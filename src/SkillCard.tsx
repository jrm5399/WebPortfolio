import React, { useState } from "react";

interface SkillCardProps {
  skill: {
    name: string;
    imageUrl: string;
    description: string;
    libraries: string[];
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const togglePopUp = () => {
    setPopUpVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className={`skill-card ${isPopUpVisible ? "pop-up-open" : ""}`}>
      <img
        className="skill-image"
        src={skill.imageUrl}
        alt={skill.name}
        onClick={togglePopUp}
      />
      <p>{skill.name}</p>

      {isPopUpVisible && (
        <div className="skill-pop-up">
          <h3>{skill.name}</h3>
          <p className="skill-description">{skill.description}</p>
          <ul>
            <div className="libraries">Libraries</div>
            {skill.libraries.map((library, index) => (
              <li className="skill-libraries" key={index}>
                {library}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
