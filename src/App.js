import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importo mis componentes

import Header from './components/Header';
import Categorias from './components/Categorias';
import Users from './components/Users';
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
      <Categorias />
      <Users />
      
      <header className="App-header">

        {/* <section className="componentes">
          
          <MiComponente/>


        </section> */}
        
      </header>
      <script src="https://use.fontawesome.com/releases/v5.15.2/js/all.js" data-search-pseudo-elements></script>
    </div>
  );
}

export default App;

