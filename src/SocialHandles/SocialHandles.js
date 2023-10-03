import githubLogo from "./github.svg";
import resumeLogo from "./resume-icon.png";
import linkedInLogo from "./linkedIn.png";
import "./SocialHandles.css";

const SocialHandles = () => {
  return (
    <div>
      <a
        className="link linkedIn"
        href="https://www.linkedin.com/in/priyadav21/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedInLogo}
          className="social-logo clickable-icon"
          alt="linkedIn logo"
        />
      </a>
      <a
        className="link github"
        href="https://github.com/priyadav21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubLogo}
          className="social-logo clickable-icon"
          alt="gitHub logo"
        />
      </a>
      <a
        className="link resume"
        href="https://drive.google.com/file/d/1Uqvm8CUPsu9bM19jkUht3mTO3Cmm0_MZ/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={resumeLogo}
          className="social-logo clickable-icon"
          alt="resume logo"
        />
      </a>
    </div>
  );
};

export default SocialHandles;
