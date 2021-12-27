import { useSelector } from "react-redux";
import "./projects.css";

export default function Projects() {
  const color = useSelector((state) => state.color);
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <div className="projectsContainer">
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <h1>Sección en construcción...</h1>
        <h3>Proximamente podrás ver mis proyectos en esta sección.</h3>
      </div>
    </div>
  );
}
