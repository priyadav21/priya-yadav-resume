import profileImage from "./profileImage.jpeg";
import "./App.css";
import SocialHandles from "./SocialHandles/SocialHandles";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="infoAboutMe">
          <img src={profileImage} className="App-logo" alt="logo" />
          <div className="name-designation">
            <h1>Priya Yadav</h1>
            <h2>Frontend Developer</h2>
          </div>
        </div>
        <div className="introduction">
          <p>
            Certified JavaScript Developer with a proven track record in
            delivering exceptional frontend solutions during a successful tenure
            at Amdocs, Pune. Over two years in the Research and Development
            (R&D) team, I honed my expertise in React.js, Redux, and HTML and
            had the privilege of collaborating within a dynamic team of 10
            professionals. My responsibilities encompassed developing innovative
            functionalities, rigorous error debugging, and imparting knowledge
            through effective mentoring.
          </p>
        </div>
        <SocialHandles />
      </header>
    </div>
  );
};

export default App;
