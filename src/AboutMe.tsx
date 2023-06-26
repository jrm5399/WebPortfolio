import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-section">
      <img src="face-pic.JPG" className="abme-img"></img>
      <h3 className="about-me-title">Background</h3>
      <p>
        Welcome! My name is <b className="name-title">John Murphy</b>, and I'm
        excited to share a little bit about myself. I am a graduate from the
        University of Central Florida, where I earned both my
        <span className="bolder"> Bachelor's</span> and
        <span className="bolder"> Master's </span> degrees in
        <span className="bolder"> Computer Science</span>. During my time as a
        graduate student, I <span className="bolder"> specialized </span> in
        <span className="bolder"> Machine Learning</span>, dedicating countless
        hours to honing my skills and becoming a{" "}
        <span className="bolder">professional Data Scientist</span>.
        <p>
          While my expertise lies in the field of
          <span className="bolder"> AI </span> and
          <span className="bolder"> Machine Learning</span>, I have also delved
          into the world of web development. In fact, I had the opportunity to
          work extensively on <span className="bolder">Web Development </span>
          projects during my role as a
          <span className="bolder"> Graduate Research Assistant</span>. This
          experience allowed me to expand my knowledge and proficiency in
          <span className="bolder"> creating custom websites</span> using
          frameworks including
          <span className="bolder"> React </span>,
          <span className="bolder"> Vue </span>, and{" "}
          <span className="bolder"> Next </span> JS. I am passionate about
          leveraging technology to solve real-world problems and enhance user
          experiences. Whether it's
          <span className="bolder">
            {" "}
            developing cutting-edge AI algorithms{" "}
          </span>
          or <span className="bolder"> crafting intuitive web interfaces </span>
          , I <span className="bolder"> strive </span> for{" "}
          <span className="bolder"> excellence </span> in every project I
          undertake. As I embark on this journey to secure my first post
          graduate job, I am eager to apply my{" "}
          <span className="bolder">skills</span>,{" "}
          <span className="bolder"> knowledge</span>, and{" "}
          <span className="bolder"> passion </span> to contribute to a
          forward-thinking organization. I look forward to connecting with
          like-minded professionals and exploring opportunities that align with
          my expertise. Thank you for visiting my website, and please feel free
          to explore further to learn more about my projects and experiences.
        </p>
      </p>
    </div>
  );
};

export default AboutMe;
