import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { CarritoProvider } from '../context/CarritoContext';

import Navbar from './Navbar/Navbar';

import ProductListContainer from './ProductListContainer/ProductListContainer';
import Contacto from './Contacto/Contacto';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carrito from './Carrito/Carrito';
import Carousel from './Carousel/Carousel';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';

function App() {
    return (
        <>
        <CarritoProvider>
            <BrowserRouter>
                <Carousel/>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ProductListContainer/>} />
                    <Route path='/categoria/:categoria' element={<ProductListContainer/>} />
                    <Route path='/producto/:id' element={<ProductDetailContainer/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                    <Route path='/carrito' element={<Carrito/>} />
                    <Route path='/contacto' element={<Contacto/>} />
                    <Route path='/checkout' element={<Checkout/>} />

                </Routes>
                <ToastContainer/>
            </BrowserRouter>
            <Footer/>
        </CarritoProvider>
        </>
    );
}

export default App;
