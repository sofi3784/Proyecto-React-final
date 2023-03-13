import { Link } from "react-router-dom";
import Categorias from "../Categorias/Categorias";

const Secciones = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contacto"}>Contacto</Link>
                            </li>

                            <Categorias/>
                            
                            
            </ul>
    );
}

export default Secciones;
