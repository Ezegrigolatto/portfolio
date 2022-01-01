import "./contact.css";
import { GoMail, GoLocation } from "react-icons/go";
import { ImMobile2 } from "react-icons/im";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useForm, ValidationError } from '@formspree/react';
import Chatbot from "../Chatbot/Chatbot"


export default function Contact() {
    const color=useSelector(state=>state.color);
    const backgroundImage=useSelector(state=>state.backgroundImage);
    const backgroundSize=useSelector(state=>state.backgroundSize);
    const [state, handleSubmit] = useForm("xwkypewz");



 
    
    const HandleForm = () => {
      if (state.succeeded) {

        return <p>Enviado con exito!</p>;
    }
    if (state.errors.length > 0) {
      return <p>No se pudo enviar el formulario.</p>
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
        <input

            id="nombre"
            autocomplete="off"
            className="input"
            type="text"
            name="nombre"
            required
            placeholder="Nombre..."
          />
          <ValidationError 
          prefix="Nombre"
          field="nombre"
          errors={state.errors}
        />
        <input
          id="email"
          type="email" 
          name="email"
          autocomplete="off"
          required
          className="input"
          placeholder="Email..."
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <input
            id="asunto"
            autocomplete="off"
            required
            className="input"
            type="text"
            name="asunto"
            placeholder="Asunto..."
          />
            <ValidationError 
          prefix="Asunto"
          field="asunto"
          errors={state.errors}
        />
        <textarea
            id="message"
            name="message"
            autocomplete="off"
            required
            className="inputMsg"
            rows={4}
            placeholder="Mensaje..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className="btn" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    );
  }

  return (
    <div className="contact" >
      <div className="contactForm" style={{color:color, backgroundImage:backgroundImage, backgroundSize:backgroundSize}}>
        <div className="someWords" style={{color:color}}>
          <h2>Mantente en contacto</h2 >
          <div className="line" >
            <GoLocation />
            <p>Monte Caseros, Argentina</p>
          </div>
          <div className="line">
            <GoMail />
            <p>ezegrigolatto@gmail.com</p>
          </div>
          <div className="line">
            <ImMobile2 />
            <p>+54 3775 - 447626</p>
          </div>
          <div className="line">
            <AiFillLinkedin />
            <a
              href="https://www.linkedin.com/in/ezequiel-grigolatto"
              target="_blank"
              rel="noreferrer"
            >
              <p style={{color:color}}>linkedin</p>
            </a>
          </div>
          <div className="line">
            <AiFillGithub />
            <a href="https://github.com/Ezegrigolatto" rel="noreferrer" target="_blank">
              <p style={{color:color}}>github</p>
            </a>
          </div>
        </div>
        <HandleForm/>
      </div>
      <Chatbot/>
    </div>
  );
}
