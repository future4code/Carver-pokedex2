import react from "react";
import { useHistory, useLocation  } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { gotoHome, goToPokedex, } from "../Router/coordinates";
import { ContainerGeral } from "./header-styled";
    
const Header = () => {
    const history = useHistory()
    const location = useLocation()
    return(
        <ContainerGeral>
                {
                    location.pathname === '/pokedex'
                    ?<button onClick={() => history.goBack()} >voltar</button>
                    : <button onClick={() => goToPokedex(history)} >Pokedex</button>
                }
                <div>
                    <img src="https://www.pikpng.com/pngl/b/176-1765284_great-20-pokemon-png-logo-for-free-download.png" onClick={() => gotoHome(history)}/>
                </div>
        </ContainerGeral>
    )
}

export default Header