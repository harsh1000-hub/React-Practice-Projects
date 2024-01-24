import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <img className="avatar" src="myPic.jpg" alt="Profile-Pic" />
    </>
  );
}

function Intro() {
  return (
    <div>
      <h1>Harsh Vardhan</h1>
      <p>
        Hey, I'm a software engineer passionate about turning complex challenges
        into elegant solutions. Let's dive into the world of efficient coding
        and innovation together!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <>
      <div className="skill-list">
        <Skill skill="HTML+CSS" emoji="💪" color="skyblue" />
        <Skill skill="JavaScript" emoji="💪" color="yellow" />
        <Skill skill="Web design" emoji="💪" color="lightgreen" />
        <Skill skill="Git and Github" emoji="👍" color="orange" />
        <Skill skill="React" emoji="💪" color="lightblue" />
        <Skill skill="Svelte" emoji="👶" color="red" />
      </div>
    </>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
