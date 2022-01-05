import react from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../Header/header';
import Pagina3 from '../Pages/Pagina3/pagina3';
import PaginaErro from '../Pages/paginaErro/paginaErro';

    const Router = () => {  
  
  
    return (
          <BrowserRouter>
          <Header/>
              <Switch>
  
                  <Route exact path={"/"}> 
                    {/* <Page1/>-------------------------------Adicionar */}
                    <Pagina3/>
                  </Route>
  
                  <Route exact path={"/pokedex"}>
                    {/* <Page2/>--------------------------------Adicionar */}
                    <Pagina3/>
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
    