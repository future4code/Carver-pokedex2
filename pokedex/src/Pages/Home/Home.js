import React, { useState, useContext, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import {PAGINATION_URL } from '../../services/util'
import { CardPokemonArea, HomeContainer, PaginationArea } from './style.css'
import { GlobalStateContext } from '../../Context/GlobalContext/GlobalStateContext'

export default function Home() {
    const {states,setters, requests} = useContext(GlobalStateContext)


    useEffect(() => {
        if(states.pokedex.length !== 0){
            let pokemonsToNotRemove = states.pokemons;
            states.pokedex.forEach(poke => {
                pokemonsToNotRemove.results = states.pokemons.results.map(pokemon => {
                    if(poke.name === pokemon.name){
                        pokemon = {...pokemon, isInPokedex:true}
                    }
                    return pokemon
                })
            });
            setters.setPokemons(pokemonsToNotRemove)
        }else{
            requests.getPokemonsFromAPI()
        }
        
    }, [states.url])
    
    const loadCards = () => {
        return states.pokemons.results.map((pokemon,index) => {
            if(pokemon.isInPokedex === false){
                return <Card key={index} pokemon={pokemon} pokedex={states.pokedex}  setPokedex={addPokemon} setDetails={setters.setDetails} buttonText='Adcionar'/>
            }
        })
    }

    const paginationCard = () => {
        if(states.pokemons.results){
            const numberOfPage = Math.round(states.pokemons.count/20) 
            const numberCards = []
            for(let i = 0; i<numberOfPage; i++){
                numberCards.push(i+1)
            }


            return numberCards.map((number,index) => {
                return <a key={index} onClick={()=> setters.setUrl(PAGINATION_URL + number*20 + '&offset=20')}>{number}</a>

            })
        }
    }

    const nextPage = () => {
        setters.setUrl(states.pokemons.next)
    }

    const previousPage = () => {
        setters.setUrl(states.pokemons.previous)
    }

    const addPokemon = (catchedPokemon) =>{
        setters.setPokedex([...states.pokedex, catchedPokemon])
        let pokemonsToNotRemove = states.pokemons;
        pokemonsToNotRemove.results = states.pokemons.results.map(pokemon => {
            if(catchedPokemon.name === pokemon.name){
                pokemon = {...pokemon, isInPokedex:true}
            }
            return pokemon
        })
        setters.setPokemons(pokemonsToNotRemove)
    }
    
    return (
        <HomeContainer>
            <CardPokemonArea>
                {states.pokemons.length !== 0? loadCards(): <h1>loading</h1>}
            </CardPokemonArea>
            <PaginationArea>
                {paginationCard()}
            </PaginationArea>
            {states.pokemons.previous ? <button onClick={previousPage}>anterior</button> : <></>}
            <button onClick={nextPage}>Proximo</button>
        </HomeContainer>
    )
}
