import { useSelector } from "react-redux";
import "./projects.css";
import Clima from "../../assets/weather.png";
import Mail from "../../assets/mailsim.png";

export default function Projects() {
  const color = useSelector((state) => state.color);
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <div className="projectsContainer">
      <h1 className="projectstitle">Proyectos</h1>
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
        >
        <div className="project">
        <h2>Weather App</h2>
        <img src={Clima} alt="weather" />
        </div>
        <div className="project">
        <h2>Mail App</h2>
        <img src={Mail} alt="mail" />
        </div>
      </div>
      <h1 className="projectstitle">Experiencias</h1>
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
        >
        </div>
        <h1 className="projectstitle">Herramientas y frameworks</h1>
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
        >
        </div>
    </div>
  );
}
