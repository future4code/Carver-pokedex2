import React, { useState,useEffect } from 'react'
import { getPokemons } from '../../services/services'
import { ButtonContainer, CardArea, ImgContainer } from './style.css'

export default function Card({pokemon}) {
    const [pokeImg, setPokeImg] = useState('')

    useEffect(()=>{
        const request = getPokemons(pokemon.url)
        request.then((res)=>{
            setPokeImg(res)
        })
    },[pokeImg])
    return (
        <CardArea>
            <ImgContainer>
                <img src={pokeImg != 0 ? pokeImg.sprites.front_default : ''} />
            </ImgContainer>
            <ButtonContainer>
                <button>Adcionar</button>
                <button>Detalhes</button>
            </ButtonContainer>
        </CardArea>
    )
}
