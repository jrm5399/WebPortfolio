import React from "react";

const SocialLinks = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/john-murphy-909343162", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/jrm5399", "_blank");
  };

  const handleMailClick = () => {
    window.open("mailto:jrm5399@live.com", "_blank");
  };

  return (
    <div className="socials-container">
      <h2 className="socials-title">Socials</h2>
      <div className="socials-buttons">
        <button className="social-button" onClick={handleLinkedInClick}>
          <img src="LI.png" alt="LinkedIn" className="social-logo" />
        </button>
        <button className="social-button" onClick={handleGitHubClick}>
          <img src="GitHub-Mark.png" alt="GitHub" className="social-logo" />
        </button>
        <button className="social-button" onClick={handleMailClick}>
          <img src="mail.webp" alt="Mail" className="social-logo" />
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
