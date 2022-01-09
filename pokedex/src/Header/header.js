import react from "react";
import { useHistory, useLocation  } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
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
                    ?<ConteinerButton>
                        <ImgButton src={pokebolaImg2} onClick={() => history.goBack()} />
                        <h4>Voltar</h4>
                    </ConteinerButton>

                    :<ConteinerButton>
                        <ImgButton src={pokebolaImg} onClick={() => goToPokedex(history)} />
                        <h4>Pokedex</h4>
                    </ConteinerButton> 
                }


                {/* <ImgButton src={pokebolaImg}/> */}


                <div>
                    <Logo src="https://www.pikpng.com/pngl/b/176-1765284_great-20-pokemon-png-logo-for-free-download.png" onClick={() => gotoHome(history)}/>
                </div>
        </ContainerGeral>
    )
}

export default Header