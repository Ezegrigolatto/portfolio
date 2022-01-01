import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Chatbot.css"
import {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsChatLeftText } from "react-icons/bs";
import botImg from "../../assets/chat_bot.png";
import user from "../../assets/user.png";
export default function Chatbot() {
  const [visibility, setVisibility] = useState(false);
  const color=useSelector(state=>state.color);
  const backgroundColor=useSelector(state=>state.backgroundColor);

  const handleClick = () => {
    setVisibility(!visibility);
  }

  const theme = {
    background: "#ffffff",
    headerBgColor: backgroundColor,
    headerzindex:"9999",
    headerFontColor: color,
    headerFontSize: "15px",
    botBubbleColor: backgroundColor,
    botFontColor: color,
    userBubbleColor: "#000000",
    userFontColor: "#ffffff",
  };

  const steps = [
    {
      id: "1",
      message: `Pssst, Hey! ¿Como te llamas?`,
      trigger: "2",
      delay: false
    },
    {
      id: "2",
      user: true,
      trigger: "3",
      delay: false
    },
    {
      id: "3",
      message: "Hola {previousValue}, encantado de conocerte!",
      trigger: "4",
    },
    {
      id: "4",
      message:"Si deseas, puedes preguntarme lo siguiente:",
      trigger: "5",
      delay: false
    },
    {
      id: "5",
      options: [
        { value: 1, label: "¿Cómo te llamas?", trigger: "10" },
        { value: 2, label: "¿En que es bueno Ezequiel?", trigger: "6" },
        { value: 3, label: "¿Por que debería contratarlo?", trigger: "7" },
        { value: 4, label: "¿Cómo es Ezequiel?", trigger: "8" },
      ],
    },
    {
      id: "6",
      component: (
        <div> Se le da bastante bien trabajar en el Front-End de una pagina web, escuché que le gusta jugar con el código, probar cosas nuevas y resolver problemas. Si quieres ver mas dale click en este <Link to="/sobre_mi" state={{section:"techs"}} className="linktech">link</Link> </div>
      ),
      trigger: "9",
      delay: false
    },
    {
      id: "7",
      message:
        "Ésto lo digo con la mano en mi centro de procesamiento: Si contratas a Ezequiel tendras en tu equipo de trabajo a una persona proactiva, que siempre quiere cumplir sus objetivos y crecer cada dia mas.",
      trigger: "9",
      delay: false
    },
    {
      id: "8",
      message: "Es una persona muy honesta, sociable y muy detallista, siempre busca que todo funcione correctamente; tiene una gran capacidad de trabajo en equipo.", 
      trigger: "9",
      delay: false
    },
    {
      id: "9",
      message: "¿En que mas puedo ayudarte?",
      trigger: "5",
    },
    {
      id: "10",
      message: "No habia pensado en ello, puedes llamarme como mas te guste! ^_^ ",
      trigger: "9",
    },
  ];

  const render = () => {
    return (
      <div className="container">
      <div className={visibility? "visible" : "hidden"}>
        <button className="cerrar" onClick={handleClick} ><RiCloseCircleLine/></button>
        <ThemeProvider theme={theme}>
          <ChatBot
            botDelay={3000}
            botAvatar={botImg}
            userAvatar={user}
            steps={steps}
          />
        </ThemeProvider>
      </div>
      <button className="chatButton" onClick={handleClick}> 
      <BsChatLeftText className="icon"/>
       </button>   
        </div>
    );
  };

  return (
   <div> {render()}</div>
  );
}
