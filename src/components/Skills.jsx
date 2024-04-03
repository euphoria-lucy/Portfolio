import React from "react";
import "../scss/Skills.scss";

const Skills = () => {
  return (
    <>
      <div className="skill">
        <div className="language-background">
          <div className="language-intro">LANGUAGE</div>
          <div className="language">
            <p className="mark">HTML</p>
            <p className="mark">CSS</p>
            <p className="mark">JavaScript</p>
            <p className="mark">React</p>
            <p className="mark">SCSS</p>
            <p>PHP</p>
            <p className="mark">Spring</p>
            <p>Java</p>
            <p>Node.js</p>
            <p>Python</p>
            <p>Kotlin</p>
            <p>C / C++ / C#</p>
          </div>
        </div>
        <div className="database-background">
          <div className="database-intro">DATABASE</div>
          <div className="database">
            <p>Oracle</p>
            <p>MySQL</p>
          </div>
        </div>
        <div className="tool-background">
          <div className="tool-intro">TOOL</div>
          <div className="tool">
            <p className="mark">Visual Studio Code</p>
            <p>IntelliJ</p>
            <p>BootStrap</p>
            <p className="mark">GitHub</p>
            <p className="mark">Notion</p>
            <p className="mark">Slack</p>
            <p>Eclipse </p>
            <p>Visual Studio</p>
            <p>Android Studio</p>
            <p>PyCharm</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
