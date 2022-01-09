import styled, { keyframes } from "styled-components"




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
`


export const ContainerGeral = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding-bottom: 5vh;
color:white;
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

img{
    /* width: 90vw; */
    
}

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
`
export const Imagens = styled.div`
    display:flex;
    flex-direction: row;
    margin: 0px;

    
`
export const Estatisticas = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
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
    padding:0px 50px 0px 50px; 
    font-size: 1.3vw;
    /* box-shadow: 5px 5px 5px 5px rgba(214,0,0, 0.6); */
    :hover{
    background-color: rgba(69,160,44, 0.5)
    }
    transform: translateY(0px);
    animation: f 4s ease-in-out;

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
`

export const ContainerCompleto = styled.div`
/* padding:7vw 13vw 10vw 13vw; */
/* padding: 100%; */

`