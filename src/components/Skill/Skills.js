import "../Skill/Skills.css";
import { skillData } from "../../data/skillData";
import React from 'react';


function Skills() {
  const midPoint = Math.floor(skillData.length / 2);
  const firstHalf = skillData.slice(0, midPoint);
  const secondHalf = skillData.slice(midPoint);

  return (
    <>
      <div id="skills" className="skill-container">
        <h1>Skills and Certificates</h1>
        <div className="skill-info">
          <div className="skill-column">
            {firstHalf.map((category, index) => (
              <div key={index} className="skill-type">
                <h3>{category.title} : </h3>
                <p>
                  {category.skills.map((skill, skillIndex) => (
                    <React.Fragment key={skillIndex}>
                      {typeof skill === "string" ? (
                        skill + ". "
                      ) : (
                        <React.Fragment>
                          <a
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {skill.skillName}
                          </a>
                        </React.Fragment>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
          <div className="skill-column">
            {secondHalf.map((category, index) => (
              <div key={index} className="skill-type">
                <h3>{category.title} : </h3>
                <p>
                {category.skills.map((skill, skillIndex) => (
                  <React.Fragment key={skillIndex}>
                    {typeof skill === "string" ? (
                      skill +'. '
                    ) : (
                        
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {skill.skillName}
                      </a>
                    )}
                  </React.Fragment>
                ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
