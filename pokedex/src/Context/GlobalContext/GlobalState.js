import React, {useState} from 'react'
import { getPokemons } from '../../services/services';
import { BASE_URL } from '../../services/util';
import { GlobalStateContext } from './GlobalStateContext';

export default function GlobalState(props) {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [details, setDetails] = useState([])
    const [url, setUrl] = useState(BASE_URL)

    const getPokemonsFromAPI = () => {
        getPokemons(url)
            .then((res)=>{
                let pokemons = res
                pokemons.results = res.results.map(pokemon=>{
                    return{...pokemon, isInPokedex:false}
                })
                setPokemons(pokemons)
            })
    }
    
    const getDetails = () => {
        getPokemons(url)
            .then(res => {
                setPokedex(res)
            })
    }
    const states = {pokemons, pokedex,url,details}
    const setters = {setPokemons,setPokedex,setUrl,setDetails}
    const requests = {getPokemonsFromAPI, getDetails}

    return (
        <GlobalStateContext.Provider value={{states,setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
