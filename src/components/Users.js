import React, {Component} from 'react';
import './../assets/css/Users.css';

import imgXenia from '../assets/img/xenia.PNG';
import imgUrbana from '../assets/img/urbana.PNG';
import surf from '../assets/img/surf.PNG';

/* Importar bootstrap */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Users extends Component{

    render(){

        return(

            <div className="users">
                <h4 className="color-light-blue text-left">Personas</h4>

                <div className="media">
                    
                    <div className="user">
                        
                        <img className="u-img" src={imgXenia}/>

                        <div className="u-info-user overlay">
                            <a className="color-light-blue f-description" href="#">
                                <h5>xenia_ua</h5>
                            </a>

                            <h6 className="text-info-user color-light-blue">#Música</h6>    

                        </div>

                    </div>

                    <div className="user">

                        <img className="u-img" src={imgUrbana}/>

                        <div className="u-info-user overlay">

                            <a className="color-light-blue f-description" href="#">
                                <h5>Hernan_..</h5>
                            </a>

                            <h6 className="text-info-user color-light-blue">#Radio</h6>    

                        </div>


                    </div>

                    <div className="user">

                        <img className="u-img" src={surf}/>

                        <div className="u-info-user overlay">

                            <a className="color-light-blue f-description" href="#">
                                <h5>TechnoBli..</h5>
                            </a>

                            <h6 className="text-info-user color-light-blue">#Surfing</h6>    

                        </div>


                    </div>
                    
                </div>

            </div>
        );
    }
}


export default Users;