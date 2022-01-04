import react from "react";
import styled from "styled-components";
import { ContainerGeral } from "./pagina3-styled";



const Pagina3 = () => {


    return(
        <ContainerGeral>
            <div className="containerImagensEEstatisticas">
                <div className="imagens">
                    <div className="image1">
                        <h2>Imagem 1</h2>
                    </div>

                    <div className="image2">
                        <h2>Image 2</h2>
                    </div>            
                </div>
                <div className="containerDeEstatisticas">
                    <div className="estatisticas">
                        <h2>Estatisticas</h2>
                    </div>
                </div>
            
            <div className="containerModelo">
                <div className="modelos">
                    <h2>Modelo</h2>
                </div>
                <div className="movimentos">
                    <h2>Movimentos</h2>
                </div>
            </div>
            </div>
        </ContainerGeral>
    )
}

export default Pagina3
