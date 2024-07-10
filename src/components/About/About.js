import "../About/About.css";
import pic from "../../assets/cv-pic.jpg";
import { personalData } from "../../data/personalData";
import React from "react";
function About() {
  console.log(personalData.language);
  return (
    <>
      <div id="about" className="about">
        <h1>About Me</h1>
        <div class="about-container">
          <div className="image">
            <img src={pic} alt="Mia Chen" />
          </div>
          <div className="introduction">
            <h2 className="title">Hi There! I'm {personalData.userName}</h2>
            <h4 className="subTitle">{personalData.email}</h4>
            <div className="text">
              <p>{personalData.intro}</p>
            </div>
            <ul className="info-content">
              <li>
                <span>Phone</span> : <span>{personalData.phone}</span>
              </li>
              <li>
                <span>Email</span> : <span>{personalData.email}</span>
              </li>
              <li>
                <span>Language</span> :
                <span>
                  {personalData.language.map((lang, index) => (
                    <React.Fragment key={index}>
                      {" " + lang}
                      {index !== personalData.language.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li>
                <span>LinkedIn</span> :
                <span>
                  <a
                    href={personalData.LinkedIn.address}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    https://www.linkedin.com/in/mia-chen-sv/
                  </a>
                </span>
              </li>
            </ul>
            <div className="button">
              <a
                className="download"
                href="/assets/Mia_Chen_Resume_EN.pdf"
                download=""
              >
                Download CV (EN)
              </a>
              <a
                className="download"
                href="/assets/Mia_Chen_Resume_EN.pdf"
                download=""
              >
                Download CV (SV)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
