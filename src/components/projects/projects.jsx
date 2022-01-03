import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./projects.css";
import Clima from "../../assets/weather.png";
import Mail from "../../assets/mailsim.png";

export default function Projects() {
  const color = useSelector((state) => state.color);
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const location = useLocation();
  const {section} = location.state || {section: "projects"};

  useEffect(() => {
    if (section === "experience") {
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
    } else {
      return;
    }
  }, [section]);
  return (
    <div className="projectsContainer">
      <h1 className="projectstitle">Proyectos</h1>
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <div className="project">
          <h2>Weather App</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://weatherapp-iota-orpin.vercel.app/"
          >
            <img src={Clima} alt="weather" />
          </a>
        </div>
        <div className="project">
          <h2>Mail App</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://email-simulator.vercel.app/"
          >
            <img src={Mail} alt="mail" />
          </a>

        </div>
          <h3>Con el pasar de los días, iré llenando esta sección con mas proyectos de todo tipo.</h3>
      </div>
      <h1 className="projectstitle" id="experience">Experiencias</h1>
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <h3>
          En estos últimos meses he realizado algunas de las siguientes tareas:{" "}
        </h3>
        <span className="tareas">
          <p>
            - Servir de guía a un grupo de estudiantes ingresantes al bootcamp
            de SoyHenry.
          </p>
          <p>
            - Formatear, organizar y conectar la información del backend con el
            frontend.{" "}
          </p>
          <p>
            - Trabajar con bases de datos SQL y noSQL para almacenar distintos
            tipos de datos.{" "}
          </p>
          <p>- Manejo de librerias externas con NPM.</p>
          <p>
            - Consumir información de APIs externas como por ejemplo de
            OpenWeatherMap, Spoonacular, Duffel, entre otras.
          </p>
          <p>
            - Trabajar con frameworks como por ejemplo React, Redux, NodeJS,
            Express, entre otras.
          </p>
          <p>
            - Utilizar herramientas como por ejemplo Git, GitHub, Postman,
            Vercel.
          </p>
          <p>
            - Organizar tareas dentro de un equipo de trabajo con metodologías
            ágiles.
          </p>
          <p>
            - Trabajar en equipo con otros estudiantes para resolver problemas.
          </p>
          <p>
            Pero sobre todo, algo que he realizado cada uno de los días desde
            que ingresé a este mundo IT es{" "}
            <b>disfrutar del proceso de aprendizaje</b>.
          </p>
        </span>
      </div>
    </div>
  );
}
