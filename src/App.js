import React from "react";
import "./styles.css";
import Home from "./Page/Home"
// import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* <Navbar />
      <Home />
      <Destination />
      <Trip />
      <Footer /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
