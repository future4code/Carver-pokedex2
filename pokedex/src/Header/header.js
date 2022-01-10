import React from "react";
import { useHistory, useLocation  } from "react-router-dom/cjs/react-router-dom.min";
import { gotoHome, goToPokedex } from "../Router/coordinates";
import { ContainerGeral, ImgButton, Logo, ConteinerButton } from "./header-styled";
import pokebolaImg from "../IMG/pokebola.png"
import pokebolaImg2 from "../IMG/pokebola2.png"
    
const Header = () => {
    const history = useHistory()
    const location = useLocation()
    return(
        <ContainerGeral>
                {
                    location.pathname === '/pokedex'
                    ?<ConteinerButton onClick={() => history.goBack()}>
                        <ImgButton src={pokebolaImg2}  />
                        <h4>VOLTAR</h4>
                    </ConteinerButton>

                    :<ConteinerButton  onClick={() => goToPokedex(history)} >
                        <ImgButton src={pokebolaImg}/>
                        <h4>POKEDEX</h4>
                    </ConteinerButton> 
                }

                <div>
                    <Logo src="https://www.pikpng.com/pngl/b/176-1765284_great-20-pokemon-png-logo-for-free-download.png" onClick={() => gotoHome(history)}/>
                </div>
        </ContainerGeral>
    )
}

export default Header