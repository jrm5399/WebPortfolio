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
    <section className="job-titles">
      <Typewriter
        options={{
          strings: titles,
          autoStart: true,
          loop: true,
          cursor: "",
          delay: 80,
          deleteSpeed: 50,
        }}
        onInit={(typewriter) => {
          typewriter.pauseFor(1000);
          typewriter
            .deleteAll()
            .typeString(titles[currentIndex])
            .start();
        }}
      />
    </section>
  );
};

export default JobTitles;
