import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../Header/header';
import Home from '../Pages/Home/Home';
import Pagina3 from '../Pages/Pagina3/pagina3';
import PaginaErro from '../Pages/paginaErro/paginaErro';
import Pokedex from '../Pages/Pokedex/Pokedex';

    const Router = () => {  
  
  
    return (
          <BrowserRouter>
          <Header/>
              <Switch>
  
                  <Route exact path={"/"}>                     
                    <Home/>
                  </Route>
  
                  <Route exact path={"/pokedex"}>
                    <Pokedex/>
                  </Route>
  
                  <Route exact path={"/informacoesPokemon"}>
                    <Pagina3/>
                  </Route>                
  
                  <Route>
                    <PaginaErro/>
                  </Route>
  
                </Switch>              
          </BrowserRouter>
    )
  }
  
  export default Router
    
