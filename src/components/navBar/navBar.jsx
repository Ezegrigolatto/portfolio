import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import Selector from "../themeSelector/themeSelector";
import {RiMenuLine, RiCloseCircleLine} from "react-icons/ri";

export default function NavBar() {

  const color=useSelector(state=>state.color);
  const backgroundColor=useSelector(state=>state.backgroundColor);

  const handlecheck = () => {
    document.getElementById("menucheckbox").checked = false
  }

  return (
    <nav className="navbar" style={{color:color, backgroundColor:backgroundColor}}>
      <Link to="/">
        <img className="logo" src={Logo} alt="sin imagen"></img>
      </Link>
      <Selector />
      <input type="checkbox" id="menucheckbox"/>
      <label for="menucheckbox" className="menuOpen"> <RiMenuLine className="iconOpen"/> </label>
      <label for="menucheckbox" className="menuClose"> <RiCloseCircleLine className="iconClose"/> </label>
      <div className="links">
      <ul className="listlinks">
      <li onClick={handlecheck} className="normal">
          <NavLink
            exact
            to="/"
            activeStyle={{ backgroundColor: 'blue' }}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            INICIO
          </NavLink>
        </li>
        <li onClick={handlecheck} className="normal">
          <NavLink
            exact
            to="/sobre_mi"
            activeStyle={{ backgroundColor: 'blue' }}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            SOBRE MI
          </NavLink>
        </li>
        <li onClick={handlecheck} className="normal">
          <NavLink
            exact
            to="/proyectos"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            PROYECTOS
          </NavLink>
        </li>
        <li onClick={handlecheck} className="normal">
          <NavLink
            exact
            to="/contacto"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            CONTACTO
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}
