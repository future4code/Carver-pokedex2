import react from "react";
import { ContainerGeral } from "./paginaErro-styled";

const PaginaErro = () => {

    return(

        <ContainerGeral>
            <br></br>
            <br></br>
            <br></br>
            <br></br>  
            <br></br>
            <br></br>
            <br></br>
            <div className="ContainerErro">
                <div className="CardErro">
                    <p className="textoErro">Algo de Errado não está certo ! ! !</p>
                    <p className="piadinha">Ao persistirem os sintomas reclame com seu dev...:)</p>
                </div>
            </div>
        </ContainerGeral>
    )


}
export default PaginaErro