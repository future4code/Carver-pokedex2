import axios from "axios"
import { BASE_URL } from "./util"


export const getPokemons = async (url) => {
    try{
        const request = await axios.get(url)
        return request.data
    } catch(err){
        alert(err.message)
    }
}
