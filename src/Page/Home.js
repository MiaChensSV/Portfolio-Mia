import Navbar from "src/components/Nav/Navbar";
import "../Page/Home.css";
import Resume from "src/components/Resume/Resume";
import Footer from "src/components/Footer/Footer";
const { default: About } = require("src/components/About/About");
const { default: Project } = require("src/components/Project/Project");

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <About />
        <Resume />
        <Project />
        <Footer />
      </div>
    </>
  );
}
export default Home;
