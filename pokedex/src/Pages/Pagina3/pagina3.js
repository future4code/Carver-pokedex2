import { ContainerGeral, Imagens, Image1, Image2, ContainerImagensEEstatisticas, Estatisticas, Modelos, ContainerModelo, Movimentos } from "./pagina3-styled";



const Pagina3 = () => {


    return(
        <ContainerGeral>
            <ContainerImagensEEstatisticas>
                <Imagens>
                    <Image1>
                        <h2>Imagem 1</h2>
                    </Image1>

                    <Image2>
                        <h2>Image 2</h2>
                    </Image2>            
                </Imagens>
                <ContainerImagensEEstatisticas>
                    <Estatisticas>
                        <h2>Estatisticas</h2>
                    </Estatisticas>
                </ContainerImagensEEstatisticas>
            
            <ContainerModelo>
                <Modelos>
                    <h2>Modelo</h2>
                </Modelos>
                <Movimentos>
                    <h2>Movimentos</h2>
                </Movimentos>
            </ContainerModelo>
            </ContainerImagensEEstatisticas>
        </ContainerGeral>
    )
}

export default Pagina3
