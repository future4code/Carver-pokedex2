import axios from "axios"


export const getPokemons = async (url) => {
    console.log("Requisitando")
    try{
        const request = await axios.get(url)
        return request.data
    } catch(err){
        alert(err.message)
    }
}
