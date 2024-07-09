import Navbar from "../components/Nav/Navbar";
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";
import AboutImg from "../assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      {/* <Footer /> */}
    </>
  );
}

export default About;
