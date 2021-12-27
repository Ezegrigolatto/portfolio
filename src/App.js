import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Network from "./assets/Technology.webm";
/*eslint-disable */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*eslint-enable */
import "./app.css";
import AboutMe from "./components/about/about";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div>
      <video className="backgroundVideo" autoPlay muted loop>
        <source src={Network} type="video/webm" codecs="vp8,vorbis" />
      </video>
      
      <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre_mi" element={<AboutMe/>} />
          <Route exact path="/proyectos" element={<Projects />} />
          <Route exact path="/contacto" element={<Contact />} />
        </Routes>

     
      <Footer />
    </div>
  );
}

export default App;
