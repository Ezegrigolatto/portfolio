import { NavLink, Link } from "react-router-dom";
import "./navBar.css";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import Selector from "../themeSelector/themeSelector";

export default function NavBar() {

  const color=useSelector(state=>state.color);
  const backgroundColor=useSelector(state=>state.backgroundColor);

  return (
    <nav className="navbar" style={{color:color, backgroundColor:backgroundColor}}>
      <Link to="/">
        <img src={Logo} alt="sin imagen"></img>
      </Link>
      <Selector />
      <ul className="links">
        <li className="normal">
          <NavLink
            exact
            to="/sobre_mi"
            activeStyle={{ backgroundColor: 'blue' }}
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Sobre mi
          </NavLink>
        </li>
        <li className="normal">
          <NavLink
            exact
            to="/proyectos"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Proyectos
          </NavLink>
        </li>
        <li className="normal">
          <NavLink
            exact
            to="/contacto"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
