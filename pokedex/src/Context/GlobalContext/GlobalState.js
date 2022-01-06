import React, {useState} from 'react'
import { getPokemons } from '../../services/services';
import { BASE_URL } from '../../services/util';
import { GlobalStateContext } from './GlobalStateContext';

export default function GlobalState(props) {
    const [pokemons, setPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [url, setUrl] = useState(BASE_URL)

    const getPokemonsFromAPI = () => {
        getPokemons(url)
            .then((res)=>{
                setPokemons(res)
            })
    }
    
    const getDetails = () => {
        getPokemons(url)
            .then(res => {
                setPokedex(res)
            })
    }
    const states = {pokemons, pokedex,url}
    const setters = {setPokemons,setPokedex,setUrl}
    const requests = {getPokemonsFromAPI, getDetails}

    return (
        <GlobalStateContext.Provider value={{states,setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
