//componente que consulta la bdd
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductList from "../ProductList/ProductList";


const ProductListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()
    useEffect(() => {

            if(categoria){
                fetch('../json/productos.json')
            .then(promise => promise.json())
            .then(items =>{
                const products= items.filter(producto => producto.idcategoria === parseInt(categoria))
                const itemsFiltrados = ProductList({products})
                
                setProductos(itemsFiltrados)

            })
                
            }else{
                fetch('./json/productos.json')
                .then(promise => promise.json())
                .then(products =>{
                    const items = ProductList({products})
                    setProductos(items)
    
                })
            }

            
                
    },[categoria])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ProductListContainer;
