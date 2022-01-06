
import './App.css';
import Pagina3 from './Pages/Pagina3/pagina3';
import Header from './Header/header';
import Router from './Router/Router';
import Home from './Pages/Home/Home';
import Pokedex from './Pages/Pokedex/Pokedex';
import GlobalState from './Context/GlobalContext/GlobalState';


function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
