import React, { useState, useEffect } from "react";
import FallingCode from "./FallingCode";
import JobTitles from "./JobTitles";

const LandingPage: React.FC = () => {
  const [nameColor, setNameColor] = useState<string | undefined>(undefined);
  const [titleColor, setTitleColor] = useState<string | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setNameColor(generateRandomColor());
      setTitleColor(generateRandomColor());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };

  const jobTitles = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Software Engineer",
    "Web Developer",
  ];

  return (
    <div className="landing-page">
      <div className="background">
        <FallingCode />
      </div>
      <div className="centered-content">
        <h1
          className="name"
          style={{
            color: "#FFFFFF",
            textShadow: `0 0 10px ${nameColor || "#00FF00"}`,
          }}
        >
          John Murphy
        </h1>
        <div className="job-titles-container">
          <JobTitles titles={jobTitles} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
