import React, {Component} from 'react';
import logo from './../assets/img/logo-no1.png';
import './../assets/css/Header.css';

/* Importar bootstrap */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Header extends Component{

    render(){

        return(

            <div className="nav-bg">
                <nav className="navbar navbar-expand-lg navbar-dark">

                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="80"  className="d-inline-block align-top App-logo" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <form class="d-flex">
                            <div class="input-group">
                                <input type="search" class="form-control search" placeholder="Buscar.." aria-label="Search"
                                    aria-describedby="search-addon" />

                                <span class="input-group-text search-btn" id="search-addon">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                        </form>
                        
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                            <a className="nav-link b" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link b" href="#">Blog</a>
                            </li>
                            
                            <li className="nav-item">
                            <a className="nav-link b" href="#" tabindex="-1" aria-disabled="true">Formulario</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link b" href="#" tabindex="-1" aria-disabled="true">Página 1</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Menús */}
                    
                </nav>
            </div>
        );
    }
}


export default Header;