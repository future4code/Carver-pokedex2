import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card'
import { BASE_URL, PAGINATION_URL } from '../../services/util'
import { getPokemons } from '../../services/services'
import { CardPokemonArea, HomeContainer, PaginationArea } from './style.css'

export default function Home() {

    const [pokemons, setPokemons] = useState([])
    const [url, setUrl] = useState(BASE_URL)


    useEffect(() => {
       const request = getPokemons(url)
       request.then((res)=>{
           console.log(res)
           setPokemons(res)
       }) 
        
    }, [url])

    const loadCards = () => {
        return pokemons.results.map((pokemon,index) => {
            return <Card key={index} pokemon={pokemon}/>
        })
    }

    const paginationCard = () => {
        if(pokemons.results){
            const numberOfPage = Math.round(pokemons.count/pokemons.results.length) 
            const numberCards = []
            for(let i = 1; i<=numberOfPage; i++){
                numberCards.push(i)
            }

            return numberCards.map((number,index) => {
                return <a key={index} onClick={()=> setUrl(PAGINATION_URL + number*20 + '&offset=20')}>{number}</a>
            })
        }
    }

    const nextPage = () => {
        setUrl(pokemons.next)
    }

    const previousPage = () => {
        setUrl(pokemons.previous)
    }
    
    return (
        <HomeContainer>
            <CardPokemonArea>
                {pokemons!= 0? loadCards(): <h1>loading</h1>}
            </CardPokemonArea>
            <PaginationArea>
                {paginationCard()}
            </PaginationArea>
            {pokemons.previous ? <button onClick={previousPage}>anterior</button> : <></>}
            <button onClick={nextPage}>Proximo</button>
        </HomeContainer>
    )
}
