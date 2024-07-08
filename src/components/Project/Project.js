import "./ProjectStyles.css";
import ProjectData from "./ProjectData";
import Cocktail from "../../assets/cocktail.png";
import Blazor from "../../assets/blazor.png";
import Trip1 from "../../assets/5.jpg";
import Trip2 from "../../assets/8.jpg";
import Trip3 from "../../assets/6.jpg";

function Project() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectcard">
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
          image={Trip2}
          heading="Netflix with Angular"
          text="Utilized the TMDB API in an Angular project to replicate the Netflix website, hosted on Github"
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/Netflix-Angular17"
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
          image={Trip2}
          heading="Bmeketo"
          text="A shopping website with ASP NET Core and Entity Framework Core."
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link="https://github.com/MiaChensSV/Bmeketo"
        />
        <ProjectData
          image={Trip2}
          heading="Trip in Malaysia"
          text=""
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link=""
        />
        <ProjectData
          image={Trip2}
          heading="Trip in Malaysia"
          text=""
          btn1Text="Demo"
          btn1Link=""
          btn2Text="Github"
          btn2Link=""
        />
      </div>
    </div>
  );
}

export default Project;
