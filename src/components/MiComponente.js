import React, {Component} from 'react';


class MiComponente extends Component{


    render(){

        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate','Lechuga','Queso','Jamón cocido'],
            calorias: 400
        };

        return(

            <div className="MiComponente">
                <h1>Nombre: {receta.nombre}</h1>
                <h2>Calorías: {receta.calorias}</h2>
                <hr/>
                <ol>
                {
                    receta.ingredientes.map((ingrediente, i) =>{
                        return(
                            <li key={i}>{ingrediente}</li>
                        );
                    })
                }
                </ol> 
            </div>
        );
    }
}


export default MiComponente;