import React, {Component} from 'react';
import logo from './../assets/img/logo-no1.png';
import 'bootstrap/dist/css/bootstrap.css';
import './../assets/css/Header.css';

class Header extends Component{


    render(){


        return(

            <div class="nav-bg">
                <nav className="navbar">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="120"  class="d-inline-block align-top logo-bg" alt="logo" />
                    </a>
                    
                </nav>
            </div>
        );
    }
}


export default Header;