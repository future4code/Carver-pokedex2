import axios from "axios"


export const getPokemons = async (url) => {
    try{
        const request = await axios.get(url)
        return request.data
    } catch(err){
        alert(err.message)
    }
}
