import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useContext } from 'react/cjs/react.development'
import { GlobalStateContext } from '../../Context/GlobalContext/GlobalStateContext'
import { goToDetails } from '../../Router/coordinates'
import { getPokemons } from '../../services/services'
import { ButtonContainer, CardArea, ImgContainer } from './style.css'

export default function Card(props) {
    const {states,setters,request} = useContext(GlobalStateContext)
    const [pokemonImg, setPokemonImg] = useState('')
    const history = useHistory()

    useEffect(()=>{
        const request = getPokemons(props.pokemon.url)
        request.then((res)=>{
            let pokemonsTodetails = states.details
            pokemonsTodetails.push(res)
            setters.setDetails(pokemonsTodetails)
            setPokemonImg(res)
        })
    },[props.pokemon])

    return (        
        <CardArea>
            <ImgContainer>
                <img src={pokemonImg != 0 ? pokemonImg.sprites.front_default : ''} />
            </ImgContainer>
            <ButtonContainer>
                <button onClick={() => props.setPokedex(props.pokemon)}>{props.buttonText}</button>
                <button onClick={()=>goToDetails(history,pokemonImg.id)}>Detalhes</button>
            </ButtonContainer>
        </CardArea>
    )
}
