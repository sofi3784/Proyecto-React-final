import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Vehiculos
        </a>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/categoria/1"}>0 Km</Link></li>
            <li><Link className="dropdown-item" to={"/categoria/2"}>Usados</Link></li>
            <li><Link className="dropdown-item" to={"/"}>Todos</Link></li>
           
        </ul>
    </li>
    );
}

export default Categorias;
