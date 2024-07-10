import React from "react";
import "./styles.css";
import Navbar from "./components/Nav/Navbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skills from "./components/Skill/Skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Resume />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
