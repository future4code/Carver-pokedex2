import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { GlobalStateContext } from "../../Context/GlobalContext/GlobalStateContext";
import {
  Nome,
  ContainerNome,
  ContainerGeral,
  ContainerCompleto,
  Imagens,
  Image1,
  Image2,
  Estatisticas,
  Movimentos,
} from "./pagina3-styled";

const Pagina3 = () => {
  const { states, setters, request } = useContext(GlobalStateContext);
  const params = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const filtered = states.details.filter((detail) => {
      return detail.id === Number(params.id.replace(":", ""));
    });
    setPokemon(filtered[0]);
  }, []);

  const loadCards = () => {
    if (pokemon && pokemon != []) {
      let moves = pokemon.moves.map((item) => {
        return <h4>{item.move.name}</h4>;
      });
      return (
        <>
          <ContainerGeral>
            <ContainerCompleto>
              <ContainerNome>
                <Nome>
                  <h4>{pokemon.name.toUpperCase()}</h4>
                </Nome>
              </ContainerNome>
              <Imagens>
                <Image1>
                  <img src={pokemon.sprites.front_default} />
                  <h2>{pokemon.types[0].type.name} type</h2>
                </Image1>
                <Image2>
                  <img src={pokemon.sprites.back_default} />
                  <h2>{pokemon.types[1].type.name} type</h2>
                </Image2>
              </Imagens>
              <Estatisticas>
                <h2>Estatisticas</h2>
                <h4>
                  <strong>HP:</strong>
                  {pokemon.stats[0].base_stat}
                </h4>
                <h4>
                  <strong>ataque:</strong>
                  {pokemon.stats[1].base_stat}
                </h4>
                <h4>
                  <strong>defesa:</strong>
                  {pokemon.stats[2].base_stat}
                </h4>
                <h4>
                  <strong>Ataque-Especial:</strong>
                  {pokemon.stats[0].base_stat}
                </h4>
                <h4>
                  <strong>Defesa-Especial:</strong>
                  {pokemon.stats[0].base_stat}
                </h4>
                <h4>
                  <strong>Speed</strong>
                  {pokemon.stats[0].base_stat}
                </h4>
              </Estatisticas>
              <Movimentos>
                <h2>Ataques</h2>
                {moves}
              </Movimentos>
            </ContainerCompleto>
          </ContainerGeral>
        </>
      );
    }
  };

  return (
    <ContainerGeral>
      {pokemon !== null ? loadCards() : <h1>loading</h1>}
    </ContainerGeral>
  );
};

export default Pagina3;
