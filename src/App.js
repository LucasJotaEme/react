import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importo mis componentes

import Header from './components/Header';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

// .....

function HolaMundo(nombre,edad){

  var presentacion = <h2>Hola, soy {nombre}, y tengo <b>{edad}</b></h2>

  return presentacion;
}

function App() {

  var nombre = "Lucas Maldonado";
  var edad = 23;


  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p class="color">
          {HolaMundo(nombre,edad)}
        </p>

        <section className="componentes">
          
          <MiComponente/>
          <Peliculas/>

        </section>
        
      </header>
    </div>
  );
}

export default App;

