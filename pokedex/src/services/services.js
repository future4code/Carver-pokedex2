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


// export const getServicos = async () => {

//     try {
//         const url = baseUrl + "jobs"
//         const request = await axios.get(url, {
//             headers: {
//                 "Authorization": key
//             }
//         })


//         return request.data.jobs

//     } catch (err) {
//         console.log(err.message)
//     }
// }