import { Link } from "react-router-dom";
import "../index.css";
import "../Componentes/css/Style.css"

export default function Nav() {
  return (
    <div id = "Menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Empresa">Empresa</Link>
        </li>

        <li>
          <Link to="/Contato">Contato</Link>
        </li>

        <li>
          <Link to="/Api">Api</Link>
        </li>
      </ul>
    </div>
  );
}
