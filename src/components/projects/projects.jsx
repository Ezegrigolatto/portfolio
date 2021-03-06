import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./projects.css";
import Clima from "../../assets/weather.png";
import Mail from "../../assets/mailsim.png";
import Remolo from "../../assets/remolo.png";
import Challenge from "../../assets/challenge.png";
import devsky from "../../assets/devsky.png";

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
      <h3 className="moreprojects">Con el pasar de los días, iré llenando esta sección con mas proyectos de todo tipo.</h3>
      <div
        className="projects"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <div className="project">
          <h2> Simple Weather App</h2>
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
        <div className="project">
          <h2>Pizzeria Don Rémolo</h2>
           <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=uXeHxYREmsM"><img src={Remolo} alt="pizzeria Don Remolo"/></a>
        </div>
        <div className="project">
          <h2>The Weather Challenge *</h2>
            <img src={Challenge} alt="the weather challenge" />
        </div>
        <div className="project">
        <h2>DEV-SKY</h2>
          <a target="_blank" href="https://www.youtube.com/watch?v=tpjZ5AQ6iqs" rel="noreferrer"><img src={devsky} alt="devSky"></img></a>

        </div>

<h3 className="nota">NOTA: El proyecto The weather Challenge ha sido desarrollado como parte de un challenge de una empresa,
   motivo por el cual no se encuentra público, sin embargo puedo contarte que se trata de una aplicación
   del clima mas completa, con posibilidad de buscar el clima para hasta 5 ciudades a la vez, clima por hora,
   clima por los 5 siguientes dias, hora local para cada ciudad buscada y aplicación de testing unitario, 
   entre otras características.
</h3>
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
