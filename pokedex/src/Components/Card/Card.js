import React, { useState, useEffect, useContext } from "react";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { GlobalStateContext } from "../../Context/GlobalContext/GlobalStateContext";
import { goToDetails } from "../../Router/coordinates";
import { getPokemons } from "../../services/services";
import {
  ButtonContainer,
  CardArea,
  ImageButtonArea,
  ImgContainer,
} from "./style.css";

export default function Card(props) {
  const {states,setters, requests} = useContext(GlobalStateContext)
  const [pokemonImg, setPokemonImg] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const request = getPokemons(props.pokemon.url);
    request.then((res) => {
      let pokemonsTodetails = states.details;
      pokemonsTodetails.push(res);
      setters.setDetails(pokemonsTodetails);
      setPokemonImg(res);
    });
  }, [props.pokemon]);

  return (
    <CardArea>
      <ImgContainer>
        <img src={pokemonImg != 0 ? pokemonImg.sprites.front_default : ""} />
      </ImgContainer>
      <ButtonContainer>
        {location.pathname === "/pokedex" ? (
          <ImageButtonArea onClick={() => props.setPokedex(props.pokemon)}>
            <img src="https://cdn-icons-png.flaticon.com/512/188/188917.png" />
          </ImageButtonArea>
        ) : (
          <ImageButtonArea onClick={() => props.setPokedex(props.pokemon)}>
            <img src="https://cdn-icons-png.flaticon.com/512/528/528101.png" />
          </ImageButtonArea>
        )}

        <ImageButtonArea onClick={() => goToDetails(history, pokemonImg.id)}>
          <img src="https://cdn-icons-png.flaticon.com/512/188/188937.png" />
        </ImageButtonArea>
      </ButtonContainer>
    </CardArea>
  );
}
