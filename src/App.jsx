import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Footer';

const App = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route
                    path="*"
                    element={<Navigate to="/" />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;