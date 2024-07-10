import "../About/About.css";
import pic from "../../assets/cv-pic.jpg";
import { personalData } from "../../data/personalData";

function About() {
  return (
    <>
      <div id="about" className="about">
        <h1>About Me</h1>
        <div class="about-container">
          <div className="image">
            <img src={pic} alt="Mia Chen" />
          </div>
          <div className="introduction">
            {personalData.map((info, index) => {
              <h2 className="title">Hi There! I'm {info.userName}</h2>
            })}
            
            <h4 className="subTitle">Fullstack Developer</h4>
            <div className="text">
              <p>
                I am an enthusiastic developer, located in Helsingborg.
                Possessing hands-on experience in React, Angular, Typescript,
                JavaScript, C#, ASP.NET Core, Blazor, HTML, CSS and MySQL, SQL
                Server.
              </p>
            </div>
            <ul className="info-content">
              <li>
                <span>Phone</span> : <span>+1 876-369-9009</span>
              </li>
              <li>
                <span>Email</span> : <span>devis@example.com</span>
              </li>

              <li>
                <span>Language</span> : <span>English, Swedish, Chinese</span>
              </li>
              <li>
                <span>LinkedIn</span> :
                <span>
                  <a> https://www.linkedin.com/in/mia-chen-sv/</a>
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
