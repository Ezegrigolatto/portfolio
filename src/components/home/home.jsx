import "animate.css";
import "./home.css";
import { useSelector } from "react-redux";
import express from "../../assets/express.png";
import sequelize from "../../assets/sequelize.png";
import { Link } from "react-router-dom";
import Chatbot from "../Chatbot/Chatbot";

export default function Home() {
  const color = useSelector((state) => state.color);
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <div className="homeContainer">
      <div
        className="bienvenida"
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        <h2>Bienvenido! Soy Ezequiel: desarrollador web Full-Stack.</h2>
        <div className="techs">
          <a
            className="a"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
              alt="javascript"
            />{" "}
          </a>
          <a
            className="a"
            href="https://html.spec.whatwg.org/multipage/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
              alt="html5"
            />{" "}
          </a>
          <a
            className="a"
            href="https://www.w3schools.com/css/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"
              alt="css3"
            />{" "}
          </a>
          <a
            className="a"
            href="https://reactjs.org/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="react"
            />{" "}
          </a>
          <a
            className="a"
            href="https://redux.js.org"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
              alt="redux"
            />{" "}
          </a>
          <a
            className="a"
            href="https://nodejs.org"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://www.nsoftware.com/ui/img/platforms/nodejs.svg"
              alt="nodejs"
              height="40"
            />{" "}
          </a>
          <a
            className="a"
            href="https://expressjs.com"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="large"
              src={express}
              alt="express"
              height="40"
            />{" "}
          </a>
          <a
            className="a"
            href="https://git-scm.com/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
            />{" "}
          </a>
          <a
            className="a"
            href="https://github.com/"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="git"
            />{" "}
          </a>
          <a
            className="a"
            href="https://www.postgresql.org"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="postgresql"
            />{" "}
          </a>
          <a
            className="a"
            href="https://postman.com"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img
              className="tech"
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
            />{" "}
          </a>
          <a
            className="a"
            href="https://sequelize.org"
            rel="noreferrer"
            target="_blank"
          >
            {" "}
            <img className="extralarge" src={sequelize} alt="sequalize" />{" "}
          </a>
        </div>
      </div>

      <div className="cajas">
        <Link className="cajaUno" state={{section:"soft"}} to="/sobre_mi">
          <div>
            <h2 className="title">Soft Skills</h2>
          </div>
        </Link>
        <Link to="/sobre_mi" state={{section:"techs"}} className="cajaDos">
          <div>
            <h2 className="title">Tech Skills</h2>
          </div>
        </Link>
        <Link to="/proyectos" className="cajaTres">
          <div>
            <h2 className="title">Proyectos</h2>
          </div>
        </Link>
        <a className="cajaCuatro" target="_blank" rel="noreferrer" href="https://mega.nz/file/wgZnQAQA#tcP2bKG6tctcm1jpIfEkrQyXIojBxu9V9kfao9oxJ7g">
          <div>
            <h2 className="title">Descarga mi CV</h2>
          </div>
        </a>
        <Link to="/proyectos" state={{section:"experience"}} className="cajaCinco">
          <div >
            <h2 className="title">Experiencias</h2>
          </div>
        </Link>
        <Link to="/contacto" className="cajaSeis">
          <div >
            <h2 className="title">Contactame</h2>
          </div>
        </Link>
      </div>
    <div className="chatbott">
      <Chatbot/>
    </div>
    </div>
  );
}
