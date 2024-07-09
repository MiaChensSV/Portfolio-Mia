import Navbar from "../components/Nav/Navbar";
import HomeHero from "../components/HomeHero";
import Footer from "../components/Footer";
import Project from "src/components/Project/Project";
import About from "../components/About/About"

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Project />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
