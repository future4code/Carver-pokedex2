import React, { useState, useContext, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import { BASE_URL, PAGINATION_URL } from '../../services/util'
import { getPokemons } from '../../services/services'
import { CardPokemonArea, HomeContainer, PaginationArea } from './style.css'
import { GlobalStateContext } from '../../Context/GlobalContext/GlobalStateContext'

export default function Home() {
    const {states,setters, requests} = useContext(GlobalStateContext)
    // const [pokemons, setPokemons] = useState([])
    // const [url, setUrl] = useState(BASE_URL)


    useEffect(() => {
        requests.getPokemonsFromAPI()        
    }, [states.url])

    const loadCards = () => {
        return states.pokemons.results.map((pokemon,index) => {
            return <Card key={index} pokemon={pokemon}/>
        })
    }

    const paginationCard = () => {
        if(states.pokemons.results){
            const numberOfPage = Math.round(states.pokemons.count/20) 
            const numberCards = []
            for(let i = 0; i<numberOfPage; i++){
                numberCards.push(i+1)
            }

            return numberCards.map((number) => {
                return <a onClick={()=> setters.setUrl(PAGINATION_URL + (number-1)*20 + '&offset=20')}>{number}</a>
            })
        }
    }

    const nextPage = () => {
        setters.setUrl(states.pokemons.next)
    }

    const previousPage = () => {
        setters.setUrl(states.pokemons.previous)
    }
    
    return (
        <HomeContainer>
            <CardPokemonArea>
                {states.pokemons!= 0? loadCards(): <h1>loading</h1>}
            </CardPokemonArea>
            <PaginationArea>
                {paginationCard()}
            </PaginationArea>
            {states.pokemons.previous ? <button onClick={previousPage}>anterior</button> : <></>}
            <button onClick={nextPage}>Proximo</button>
        </HomeContainer>
    )
}
