import "./footer.css";
import { useSelector } from "react-redux";

export default function Footer() {
    const color=useSelector(state=>state.color);
    const backgroundColor=useSelector(state=>state.backgroundColor);
    return (
        <div className="footer" style={{color:color, backgroundColor:backgroundColor}}>
            <p>2022 - Ezequiel Grigolatto</p>
            <p>Todos los derechos reservados.</p>
        </div>
    )
}