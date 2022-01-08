import React, { useContext,useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import { GlobalStateContext } from '../../Context/GlobalContext/GlobalStateContext'
import { PokedexCardArea, PokedexContainer } from './style.css'

export default function Pokedex() {
    const {states, setters, request} = useContext(GlobalStateContext)
    const [pokemons, setPokemons] = useState([])    
    useEffect(() => {
        if(states.pokedex.length !== 0){
            setPokemons(states.pokedex)
        }
    }, [states.pokedex])

    const removePokemons = (removedPokemon) => {
        let filteredPokemons = states.pokedex.filter(pokemon=>{
            console.log(pokemon, removedPokemon)
            return pokemon.name !== removedPokemon.name
        })
        let pokemonsToRemove = states.pokemons 
        pokemonsToRemove.results = states.pokemons.results.map((pokemon)=>{

            if(removedPokemon.name === pokemon.name){
                pokemon = {...pokemon, isInPokedex:false}
            }

            return pokemon
        })

        console.log(filteredPokemons)
        setters.setPokemons(pokemonsToRemove)
        setters.setPokedex(filteredPokemons)
    }

    const loadCards = () => {
        return states.pokedex.map((pokemon,index) => {
            return <Card key={index} pokemon={pokemon} pokedex={states.pokedex} setPokedex={removePokemons} setDetails={setters.setDetails} buttonText='Remover' />
        })
    }
    return (
        <PokedexContainer>
            <PokedexCardArea>
            {states.pokedex !== []? loadCards(): <h1>loading</h1>}
            </PokedexCardArea>            
        </PokedexContainer>
    )
}
