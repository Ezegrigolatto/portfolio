import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/actions";
import { MdColorLens } from "react-icons/md";
import { RiCloseCircleLine } from "react-icons/ri";
import Rosa from "../../assets/rosa.webp";
import Azul from "../../assets/azul.webp";
import Verde from "../../assets/verde.webp";
import Naranja from "../../assets/naranja.webp";
import Gris from "../../assets/gris.webp";
import Blanco from "../../assets/blanco.webp";
import "./themeSelector.css";

export default function Selector() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const backgroundColor = useSelector((state) => state.backgroundColor);

  const changeColor = (e) => {
    console.log(e.target.value);
    if (e.target.value === "pink") {
      dispatch(
        changeTheme({
          color: "black",
          backgroundColor: "pink",
          backgroundImage: `url(${Rosa})`,
        })
      );
    } else if (e.target.value === "orange") {
      dispatch(
        changeTheme({
          color: "black",
          backgroundColor: "#ff8800",
          backgroundImage: `url(${Naranja})`,
        })
      );
    } else if (e.target.value === "gray") {
      dispatch(
        changeTheme({
          color: "white",
          backgroundColor: "#5a5a5a",
          backgroundImage: `url(${Gris})`,
        })
      );
    } else if (e.target.value === "blue") {
      dispatch(
        changeTheme({
          color: "white",
          backgroundColor: "#1d7fd4",
          backgroundImage: `url(${Azul})`,
        })
      );
    } else if (e.target.value === "white") {
      dispatch(
        changeTheme({
          color: "black",
          backgroundColor: "white",
          backgroundImage: `url(${Blanco})`,
        })
      );
    } else if (e.target.value === "green") {
      dispatch(
        changeTheme({
          color: "black",
          backgroundColor: "#86FF80",
          backgroundImage: `url(${Verde})`,
        })
      );
    }
    ocultar();
  };

  const ocultar = () => {
    setTimeout(() => {
      document.getElementById("themeSelector").className = "themesOculto";
    }, 100);
  };

  const handleocultar = () => {
    document.getElementById("themecheckbox").checked = false;
  };

  return (
    <div className="themesContainer">
      <input type="checkbox" id="themecheckbox"></input>
      <label for="themecheckbox" id="themeopen">
        <MdColorLens
          style={{ color: color, backgroundColor: backgroundColor }}
          className="md"
        />
      </label>
      <div className="themesOculto" id="themeSelector">
        <label for="themecheckbox" id="themeclose">
          <RiCloseCircleLine
            style={{ color: color, backgroundColor: backgroundColor }}
            className="themeclose"
          />
        </label>
        <ul className="ul">
          <li onClick={handleocultar}>
            <button className="lis" onClick={changeColor} value="white">
              Blanco
            </button>
          </li>
          <li onClick={handleocultar}>
            <button className="lis" onClick={changeColor} value="gray">
              Gris
            </button>
          </li>
          <li onClick={handleocultar}>
            <button className="lis" onClick={changeColor} value="pink">
              Rosa
            </button>
          </li>
          <li onClick={handleocultar}>
            <button className="lis" onClick={changeColor} value="orange">
              Naranja
            </button>
          </li>
          <li onClick={handleocultar}>
            <button className="lis" onClick={changeColor} value="blue">
              Azul
            </button>
          </li>
          <li onClick={handleocultar}>
            <button className="lis" onClick={changeColor} value="green">
              Verde
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
