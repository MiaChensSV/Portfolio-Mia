import "../Resume/Resume.css";
import { resumeData } from "src/data/resumeData";
import React from "react";
function Resume() {
  return (
    <>
      <div id="resume" className="resume-container">
        <h1>Resume</h1>
        <div className="resume-info">
          {resumeData.map((resumeItem, index) => (
            <React.Fragment key={resumeItem + index}>
              <div key={resumeItem + index} className="resume-column">
                <div className="resume-column-title">
                  <img
                    className="icon"
                    src={resumeItem.img}
                    alt={resumeItem.title}
                  />
                  <h2 className="resume-heading-title">{resumeItem.title}</h2>
                </div>
                <div className="resume-timeline-wrap">
                  {resumeItem.data.map((experience, index) => (
                    <React.Fragment key={experience + index}>
                      <div className="resume-timeline">
                        <h3 className="resume-title">{experience.title}</h3>
                        <div className="resume-subTitle">{experience.date}</div>
                        <h4 className="resume-place">{experience.place}</h4>
                        <div className="resume-description">
                          <ul>
                            {experience.description &&
                              experience.description.map((des, desIndex) => (
                                <li key={desIndex}>{des}</li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resume;
