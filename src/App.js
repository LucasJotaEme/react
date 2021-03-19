import logo from './assets/img/logo.svg';
import './assets/css/App.css';

// Importo mis componentes

import Header from './components/Header';
import Categorias from './components/Categorias';
import Users from './components/Users';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function App() {


  return (
    <div className="App">

      <Header />
      <Categorias />
      <Users />
      
    </div>
  );
}

export default App;

