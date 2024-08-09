import "./ProjectStyles.css";
import ProjectData from "./ProjectData";
import Cocktail from "../../assets/cocktail.png";
import Blazor from "../../assets/blazor.png";
import Scanspark from "../../assets/scanspark.png";
import Rental from "../../assets/rental.png";
import Question from "../../assets/question-in-process.png";
import Insurance from "../../assets/insurance.png"
import Bmeketo from "../../assets/Bmeketo.png"
function Project() {
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projectcard">
        <ProjectData
          image={Rental}
          heading="Casa Mia Holiday Rental"
          text="This is a holiday rental website created with React and NodeJS."
          btn1Text="Demo"
          btn1Link="https://vacationnerja.com/"
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/casaMiaFrontend"
        />
        <ProjectData
          image={Scanspark}
          heading="Static Company Site"
          text="An introductive website for a company who is doing exporting, deployed in google cloud."
          btn1Text="Demo"
          btn1Link="https://scanspark.se/"
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/scanspark"
        />
        <ProjectData
          heading="Random Question"
          image={Question}
          text="A small Quiz Game. Backend is using Asp.Net Core Web API. Fronend is using Angular."
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/Random-question"
        />
        <ProjectData
          image={Cocktail}
          heading="Cocktail Recept"
          text="It is a website that developed with React, search for cocktail recipes."
          btn1Text="Demo"
          btn1Link="https://cocktail-recept.netlify.app/"
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/Cocktail"
        />
        <ProjectData
          image={Blazor}
          heading="WebShop with Blazor"
          text="A Blazor WebAssembly project with C#, XUnit with simulated API data. "
          btn1Text="Demo"
          btn1Link="https://blazor-onlineshop.netlify.app/"
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/OnlineShop-Blazor-C-"
        />
        <ProjectData
          heading="Bmeketo"
          image={Bmeketo}
          text="A shopping website with ASP NET Core and Entity Framework Core."
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/Bmeketo"
        />

        <ProjectData
          heading="Insurance Issue Report"
          image={Insurance}
          text="A console application where you can register as a customer, register a case about damage as a user and severvice man can make a comment, update case status."
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/CaseHandelApp"
        />
      </div>
    </div>
  );
}

export default Project;
