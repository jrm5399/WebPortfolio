import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

interface JobTitlesProps {
  titles: string[];
}

const JobTitles: React.FC<JobTitlesProps> = ({ titles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [titles]);

  return (
    <section className="job-titles-container">
      <Typewriter
        options={{
          strings: titles,
          autoStart: true,
          loop: true, // Enable loop to continuously loop through titles
          cursor: "",
          delay: 80,
          deleteSpeed: 50,
        }}
      />
    </section>
  );
};

export default JobTitles;
