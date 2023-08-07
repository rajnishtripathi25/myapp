import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="container-fluid " >
                <div className="row justify-content-center">
                    <div className="col-10">

                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand">EasyCodingZone</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact='true'  className="nav-link " aria-current="page" to='/'>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact='true'   className="nav-link" to='/about'>About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact='true'   className='nav-link' to='/contact'>Contact us</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact='true'  className="nav-link" to='/service'>Services</NavLink>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;