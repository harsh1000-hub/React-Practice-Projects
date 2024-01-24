import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PropTypes from "prop-types";

import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
        Hey, I am a software engineer passionate about turning complex
        challenges into elegant solutions. Let us dive into the world of
        efficient coding and innovation together!
      </p>
    </div>
  );
}

Intro.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function SkillList() {
  // render a list inside jsx in this component
  const skillArray = skills;
  return (
    <>
      <div className="skill-list">
        {/* <Skill skill="HTML+CSS" emoji="💪" color="skyblue" />
        <Skill skill="JavaScript" emoji="💪" color="yellow" />
        <Skill skill="Web design" emoji="💪" color="lightgreen" />
        <Skill skill="Git and Github" emoji="👍" color="orange" />
        <Skill skill="React" emoji="💪" color="lightblue" />
        <Skill skill="Svelte" emoji="👶" color="red" /> */}

        {skillArray.map((skillItem) => (
          <Skill skillObj={skillItem} key={skillItem.skill} />
        ))}
      </div>
    </>
  );
}

SkillList.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      level: PropTypes.oneOf(["beginner", "intermediate", "advanced"])
        .isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function Skill({ skillObj }) {
  // destructure the props that is come from SkillList
  return (
    // before conditional rendering
    // <div className="skill" style={{ backgroundColor: props.color }}>
    //   <span>{props.skill}</span>
    //   <span>{props.emoji}</span>
    // </div>

    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      {/* apply conditional rendering to give emoji according to level of skill */}
      {skillObj.level === "advanced" ? (
        <span>💪</span>
      ) : skillObj.level === "intermediate" ? (
        <span>👍</span>
      ) : (
        <span>😯</span>
      )}
    </div>
  );
}

Skill.propTypes = {
  skillObj: PropTypes.shape({
    skill: PropTypes.string.isRequired,
    level: PropTypes.oneOf(["beginner", "intermediate", "advanced"]).isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
