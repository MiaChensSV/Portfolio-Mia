import Navbar from "../components/Nav/Navbar";
import HomeHero from "../components/HomeHero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Project from "../components/Project/Project";

function Service() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Project />
      {/* <Footer /> */}
    </>
  );
}

export default Service;
