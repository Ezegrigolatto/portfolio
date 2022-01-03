import "./about.css";
import SoftSkills from "../../assets/soft-skills.webp";
import TechSkills from "../../assets/tech-skills.webp";
import SF1 from "../../assets/SF1.png";
import SF2 from "../../assets/SF2.png";
import SF3 from "../../assets/SF3.png";
import SF4 from "../../assets/SF4.png";
import { useSelector } from "react-redux";
import {RiCloseCircleLine} from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AboutMe() {
  const color=useSelector(state=>state.color);
  const backgroundColor=useSelector(state=>state.backgroundColor);
  const location = useLocation();
  const {section} = location.state || {section: "about"};

  useEffect(()=>{
    if(section==="techs"){
      document.getElementById("techs")?.scrollIntoView({behavior: "smooth"});
    }
    else if(section==="soft"){
      document.getElementById("soft")?.scrollIntoView({behavior: "smooth"});
    }else{
      return
    }
  },[section])


  const hacerModal = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("show");
  };

  const ocultarchat = () => {
    document.getElementById("chatbot")?.classList.add("hide");
  };

  const mostrarchat = () => {
    document.getElementById("chatbot")?.classList.remove("hide");
  };

console.log(section)

  return (
    <div className="about"  >
      <div className="section" style={{color:color, backgroundColor:backgroundColor}}>
        <h1>Sobre mi</h1>
        <div className="titleimage" >
          <img
            className="imageabout"
            src="https://content.techgig.com/thumb/msid-74548080,width-860,resizemode-4/4-essential-skills-every-NET-developer-must-possess.jpg?67629"
            alt="About-me"
          />
          <div className="description" style={{color:color, backgroundColor:backgroundColor}}>
            <p>
              Soy un desarrollador web Full-Stack con preferencia sobre el
              Front-End.
            </p>
            <p>
              {" "}
              Me encanta aprender algo nuevo todos los dias, me motiva el poder
              crecer y desarrollarme a medida que hago lo que me gusta.
            </p>
            <p>
              Estoy radicado en Argentina y algunos de mis hobbies son escuchar
              música, jugar videojuegos y leer artículos científicos.
            </p>
            <p>
              Me gusta estar al tanto de los avances tecnológicos y me fascina
              la astronomía.
            </p>
            <a className="cv" target="_blank" rel="noreferrer" href="https://mega.nz/file/wgZnQAQA#tcP2bKG6tctcm1jpIfEkrQyXIojBxu9V9kfao9oxJ7g"> <button className="btnabout">Descarga mi CV</button> </a>
          </div>
        </div>
      </div>
      <div id="soft" className="section"style={{color:color, backgroundColor:backgroundColor}}>
     <h1 >Soft Skills</h1>
        <div className="titleimage" style={{color:color, backgroundColor:backgroundColor}}>
          <img className="imageabout" src={SoftSkills} alt="Soft Skills" />

          <div className="description" style={{color:color, backgroundColor:backgroundColor}}>
            <p>
              Durante 2 meses me desempeñé como Teach Assistant, donde fuí guia
              de un grupo de estudiantes; esta experiencia me permitió mejorar mis
              habilidades de comunicación y liderazgo.
            </p>
            <p>Me considero un hábil problem solver y una persona a la que no le
            cuesta integrarse a un grupo de trabajo.</p>
            <p>
              Me gusta aprender nuevas tecnologías y retarme a mi mismo para
              superarme a diario.
            </p>
            <p>
              Soy una persona honesta, de naturaleza curiosa y con facilidad para adquirir o transmitir
              conocimientos.
            </p>
            <input type="checkbox"  id="btnabout"></input>
            <label onClick={ocultarchat} for="btnabout" id="btnopen">Ver tests</label>
            <div className="testsContainer">
              <label for="btnabout" className="cerrar"> <RiCloseCircleLine onClick={mostrarchat}/> </label>
              <div className="imgContainer">
              <div className="foto"><img onClick={hacerModal} className="photo" id="foto1" src={SF1} alt="noImage"></img></div>
              <div className="foto"><img onClick={hacerModal} className="photo" id="foto2" src={SF2} alt="noImage"></img></div>
              <div className="foto"><img onClick={hacerModal} className="photo" id="foto3" src={SF3} alt="noImage"></img></div>
              <div className="foto"><img onClick={hacerModal} className="photo" id="foto4" src={SF4} alt="noImage"></img></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" style={{color:color, backgroundColor:backgroundColor}}>
        <h1 id="techs">Tech Skills</h1>
        <div className="titleimage">
          <img className="imageabout" src={TechSkills} alt="Tech Skills" />

          <div className="description" style={{color:color, backgroundColor:backgroundColor}}>
            <p>
              Dentro de mi stack de conocimientos puedo destacar los siguientes:
            </p>
            <div className="listas">
            <ul className="lista">
              <li> JavaScript (ES6+) </li>
              <li> ReactJS </li>
              <li> Redux</li>
              <li> NodeJS </li>
              <li> ExpressJS </li>
              <li> PostgreSQL </li>
              </ul>
              <ul className="lista">
              <li> HTML5 </li>
              <li> CSS3 </li>
              <li> Bootstrap </li>
              <li> Git </li>
              <li> Vercel </li>
              <li> Postman </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
