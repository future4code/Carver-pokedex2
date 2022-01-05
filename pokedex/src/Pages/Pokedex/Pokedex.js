import React from 'react'
import Card from '../../Components/Card/Card'
import { PokedexCardArea, PokedexContainer } from './style.css'

export default function Pokedex() {
    return (
        <PokedexContainer>
            <PokedexCardArea>
                <Card/>
            </PokedexCardArea>            
        </PokedexContainer>
    )
}
