import { Link } from "react-router-dom";

const Product = ({prod}) => {
    return (
        
        <div className="card cardProducto" style={{width: '18rem'}}>
            <img src={prod.img} className="card-img-top img-card" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{prod.marca} {prod.modelo}</h5>
            <p className="card-text">Tipo: {prod.tipo}</p>
            <p className="card-text">Año: {prod.año}</p>
            <p className="card-text">Versión: {prod.version}</p>
            <p className="card-text">Color: {prod.color}</p>
            <p className="card-text">Combustible:{prod.combustible}</p>
            <p className="card-text">Puertas: {prod.puertas}</p>
            <p className="card-text">Transmisión: {prod.transmision}</p>
            <p className="card-text">Motor: {prod.motor}</p>
            <p className="card-text">Carroceria: {prod.carroceria}</p>
            <p className="card-text">Km: {prod.km}</p>
            <p className="card-text">Stock: {prod.stock}</p>
            <p className="card-text">Precio: ${new Intl.NumberFormat("de-DE").format(prod.precio)}</p>
            <button className="btn btn-dark"><Link to={`/producto/${prod.id}`} >Ver Producto</Link></button>
            
            </div>
        </div>
        //<div>
        //    <h3>Nombre : {prod.marca} {prod.modelo}</h3>
         //   <p>Tipo : {prod.tipo}</p>
         //   <p>Año : {prod.año}</p>
         //   <p>Versión : {prod.version}</p>
         //   <p>Color : {prod.color}</p>
         //   <p>Combustible : {prod.combustible}</p>
         //   <p>Puertas : {prod.puertas}</p>
         //   <p>Transmision : {prod.transmision}</p>
         //   <p>Motor : {prod.motor}</p>
         //   <p>Carroceria : {prod.carroceria}</p>
         //   <p>km : {prod.km}</p>
         //   <p>Precio : ${prod.precio}</p>
        //</div>
    );
}

export default Product;
