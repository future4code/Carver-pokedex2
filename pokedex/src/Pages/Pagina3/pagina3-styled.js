import styled, { keyframes } from "styled-components"



export const ContainerGeral = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5vh;
    color:white;
`

export const ContainerCompleto = styled.div`
    width: 95vw;
    display: flex;
    @media screen and (max-device-width : 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
`

export const ContainerNome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(43,124,42, 0.5);
    height: 20px;
    margin: 5vw 0vw 3vw 0vw;
    border-radius: 20px;
    border: 3px solid black;
    
    
    @media screen and (max-device-width : 480px){
        margin-top: 7vh;
        width: 100%;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        margin-top: 7vh;
        width: 100%;
        
    }

`
export const Nome = styled.div`
    display:inline-flexbox;
    border-radius: 50px;
    padding-left: 3vw;
    padding-right: 3vw;
    background-color: red;
    font-size: 3em;
    transform: translateY(0px);
    animation: float1 4s ease-in-out;
    border: 3px solid black;

    @keyframes float1 {
        0% {
            transform: translateX(0px);
        }
        50%{
            transform: translateX(60px);
        }
        100%{
            transform: translateX(0px);
        }
    }

    @media screen and (max-device-width : 480px){
        height: 6vh;
        display: flex;
        align-items: center;

        h4{
            font-size: 2rem;
            margin: 0;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        height: 10vh;
        display: flex;
        align-items: center;

        h4{
            font-size: 2rem;
            margin: 0;
        }
        
    }
`
export const Imagens = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0;

    h2{
        margin: 0;
        padding: 2%;
        font-size: 2rem;
        position: absolute;
        border-bottom: 1px solid white;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        h2{
            top: 0;
            text-transform: uppercase;
            font-size: 1.5rem;
        }
        
    }

`

export const Image1 = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(43,124,42, 0.9);
    width: 19vw;
    height: 19vw;
    margin: 0vw 1vw 0vw 0vw;
    border:0.6vw solid rgb(177,80,12);
    border-radius: 50px 0px 50px 0px;
    padding:20px;
    box-shadow:7px 7px rgba(43,124,42, 0.7);
    transform: translateY(0px);
    animation: float2 3s ease-in-out;
    
    @keyframes float2 {
        0% {
            transform: translateX(0px);
        }
        50%{
            transform: translateX(-30px);
        }
        100%{
            transform: translateX(0px);
        }
    }
    
    @media screen and (max-device-width : 480px){
        width: 70vw;
        height: 30vh;
        margin: 3vh 0;
        border-radius: 10px;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        width: 35vw;
        margin: 3vh 0;
        align-items: center;
        justify-content: center;
    }
`

export const Image2 = styled.div`
    display: flex;
    background-color: rgba(43,124,42, 0.9);
    width: 19vw;
    height: 19vw;
    margin: 0vw 1vw 0vw 0vw;
    border:0.6vw solid rgb(177,80,12);
    border-radius: 0px 50px 0px 50px;
    padding:20px;
    box-shadow:7px 7px rgba(43,124,42, 0.7);

    transform: translateY(0px);
    animation: flo 3s ease-in-out;

    @keyframes flo {
        0% {
            transform: translateX(0px);
        }
        50%{
            transform: translateX(30px);
        }
        100%{
            transform: translateX(0px);
        }
    }

    @media screen and (max-device-width : 480px){
        width: 70vw;
        height: 30vh;
        margin-bottom: 2vh;
        border-radius: 10px;
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        align-items: center;
        justify-content: center;
        width: 35vw;
        margin: 3vh 0;
    }
`
export const Estatisticas = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    background-color: rgba(43,124,42, 0.7);
    width: 39vw;
    height: 80px;
    margin: 10px 0px 10px 0px;
    border: 0.6vw solid rgb(177,80,12);
    border-radius: 0px 50px 0px 50px;
    padding:0px 50px 0px 50px; 
    box-shadow:7px 7px rgba(43,124,42, 0.7);
    font-size: 1.3vw;
    
    :hover{ background-color: rgba(69,160,44, 0.5) }
    
    transform: translateY(0px);
    animation: fl 3s ease-in-out;
    
    @keyframes fl {
        0% {
            transform: translateY(0px);
        }
        50%{
            transform: translateY(30px);
        }
        100%{
            transform: translateY(0px);
        }
}
    @media screen and (max-device-width : 480px){
        grid-template-columns: repeat(2, 1fr);
        width: 65vw;
        height: auto;
        margin-bottom: 2vh;
        border-radius: 10px;

        h2{
            font-size: 1.8rem;
            color: rgb(177,80,12);
        }

        h4{
            font-size: 1.5rem;
        }

        strong{
            margin-right: 5px;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        grid-template-columns: repeat(2, 1fr);
        width: 65vw;
        height: auto;
        margin-bottom: 2vh;
        border-radius: 10px;

        h2{
            font-size: 1.8rem;
            color: rgb(177,80,12);
            margin: 0;
            padding: 2%;
            font-size: 2rem;
            border-bottom: 1px solid;
        }

        h4{
            font-size: 1.5rem;
        }

        strong{
            margin-right: 5px;
        }
    }
`
export const Movimentos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    align-items: center;
    width: 39vw;
    background-color: rgba(43,124,42, 0.7);
    margin: 0px;
    border: 0.6vw solid rgb(177,80,12);
    border-radius: 0px 50px 0px 50px;
    box-shadow:7px 7px rgba(43,124,42, 0.7);
    padding:0px 50px 0px 50px; 
    font-size: 1.3vw;
    transform: translateY(0px);
    animation: f 4s ease-in-out;
    
    :hover{
        background-color: rgba(69,160,44, 0.5)
    }
    
    @keyframes f {
        0% {
            transform: translateY(0px);
        }
        50%{
            transform: translateY(40px);
        }
        100%{
            transform: translateY(0px);
        }
    }

    @media screen and (max-device-width : 480px){
        grid-template-columns: repeat(2, 60%);
        width: 65vw;
        height: auto;
        margin-bottom: 2vh;
        border-radius: 10px;

        h2{
            font-size: 1.8rem;
            color: rgb(177,80,12);
            padding: 2%;
        }

        h4{
            font-size: 1.5rem;
        }

        strong{
            margin-right: 5px;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        width: 65vw;
        height: auto;
        margin-bottom: 2vh;
        border-radius: 10px;

        h2{
            font-size: 1.8rem;
            color: rgb(177,80,12);
            margin: 0;
            padding: 2%;
            font-size: 2rem;
            border-bottom: 1px solid;
        }

        h4{
            font-size: 1.5rem;
        }

        strong{
            margin-right: 5px;
        }
    }
`
