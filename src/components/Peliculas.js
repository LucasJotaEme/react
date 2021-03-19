import React from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends React.Component{

    render(){

        return(

            <div className="Pelicula">

                <h4>Soy el componente de película.</h4>
                <MensajeEstatico />
                
            </div>
            
        );

    }
}

export default Peliculas;