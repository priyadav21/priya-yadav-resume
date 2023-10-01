import linkedInLogo from "./linkedIn.png";
import profileImage from "./profileImage.jpeg";
import githubLogo from "./github.svg";
import resumeLogo from "./resume-icon.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} className="App-logo" alt="logo" />
        <h1>Priya Yadav</h1>
        <div>
          <a
            className="link linkedIn"
            href="https://www.linkedin.com/in/priyadav21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} className="social-logo" />
          </a>
          <a
            className="link github"
            href="https://github.com/priyadav21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} className="social-logo" />
          </a>
          <a
            className="link resume"
            href="https://drive.google.com/file/d/1zFxe99RYn0l17wT4qiq83tUWZGaZjKl5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resumeLogo} className="social-logo" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
