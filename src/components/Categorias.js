import React, {Component} from 'react';
import './../assets/css/Categorias.css';
import imagenCategoria from '../assets/img/cocina.jpg';
import imagenCategoriaGym from '../assets/img/gym.jpg';
import imagenGamer from '../assets/img/gamer.jpg';

/* Importar bootstrap */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class SideBar extends Component{


    render(){


        return(

            <div className="categorias">
                <h4 className="color-pink">Actividades actuales</h4>
                <div className="media">

                    <div className="categoria">
                        <img className="c-img" src={imagenCategoria} alt={imagenCategoria}/>
                        <a className="color-light-blue f-description" href="#">Cocina</a>
                    </div>

                    <div  className="categoria">
                        <img className="c-img" src={imagenCategoriaGym} alt={imagenCategoriaGym}/>
                        <a className="color-light-blue f-description" href="#">Gimnasio</a>
                    </div>

                    <div  className="categoria">
                        <img className="c-img" src={imagenGamer} alt={imagenGamer}/>
                        <a className="color-light-blue f-description" href="#">Game</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default SideBar;